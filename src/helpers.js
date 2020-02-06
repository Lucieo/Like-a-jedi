function generateRandomNumber(min=0, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
};

function getTotalPoints(array_, field){
  array_=array_.flat().map(el=>el[field])
  return array_.length>0
  ?array_.reduce((total, element)=>{
    return total+element})
  :0
}

function getPercentage(figure, base){
  return ((figure*100)/base)/100
}



function launchMission(mission, state, dispatch){
  if(state.location!==mission.location && state.ship.length===0){
    return dispatch({type:'ADD_INFO', field:'dialog', payload:{title:'MISSION ABORT', text:`Are you out of your mind?!? You currently are in ${state.location} you cannot reach ${mission.location} without a ship!`, type:'error'}})
  }

  const luck = generateRandomNumber(0.8, 1.2);
  const experience =1+getPercentage(state.points, state.missionCollection.reduce((accumulator, element)=>accumulator+element['experience-bonus'], 0));
  const life = 1+getPercentage(100-state.life, 100);

  const armor = getTotalPoints([state.equipment, state.ship], 'armor')*luck*life*experience;
  const attack = getTotalPoints([state.equipment, state.ship], 'attack')*luck*life*experience;

  const resultAttack = Math.round(attack - mission.armor);
  const resultArmor = Math.round(armor - mission.attack);
  const dead = ((state.life + resultArmor)<=0)
  let status = undefined;

  if(resultAttack>0){
    resultArmor>0
    ? status='win'
    : status='winDamage'
  }
  else{
    resultArmor>0
    ?status = 'lose'
    :status = 'loseDamage'
  }


  //ADD POINTS CREDITS AND DAMAGES
  if(dead){
    dispatch({type:'TOGGLE_INFO', field:'dead'})
  }
  else{
    if(resultAttack>0){
      dispatch({type:'INCREASE_VALUE', field:'points', value:mission['experience-bonus']})
      dispatch({type:'INCREASE_VALUE', field:'credits', value:mission['credit-bonus']})
    }
    if(resultArmor<0){
      dispatch({type:'DECREASE_VALUE', field:'life', value:Math.abs(resultArmor)})
    }
    dispatch({type:'ADD_TO_LIST', value:{...mission, status}, field:'mission'})
  }

  //DISPLAY MESSAGE
  if(dead){
    return dispatch({type:'ADD_INFO', field:'dialog', payload:{title:'GAME OVER', text:`Sorry this is the end... You died a hero on ${mission.location}. Your bravery will be remembered!`, type:'dead'}})
  }
  switch (status) {
    case 'win':
      return dispatch({type:'ADD_INFO', field:'dialog', payload:{title:'WE HAVE A WINNER', text:`This mission went like clockwork! Not a scratch! You earned ${mission['experience-bonus']} experience points and ${mission['credit-bonus']} GC! Well done!`, type:'win'}})

    case 'winDamage':
      return dispatch({type:'ADD_INFO', field:'dialog', payload:{title:'Ouch... but YEAHH!', text:`This was definitively not a piece of cake but you managed it. You earned ${mission['experience-bonus']} experience points and ${mission['credit-bonus']} GC! But you lost ${Math.abs(resultArmor)} life points... Not bad!`, type:'winDamage'}})

    case 'lose':
      return dispatch({type:'ADD_INFO', field:'dialog', payload:{title:'Nahhh didn\'t work...' , text:`You may have bitten off more than you can chew... Let's not bury our heads in the sand this went bad... At least you got home safe!`, type:'lose'}})

    case 'loseDamage':
      return dispatch({type:'ADD_INFO', field:'dialog', payload:{title:'This is a slaughter...' , text:`Ok you really must review your strategy. This is a crushing defeat... and you lost ${Math.abs(resultArmor)} life points. Sorry...`, type:'loseDamage'}})

    default:
      return false

    }
}


export {
  launchMission
}
