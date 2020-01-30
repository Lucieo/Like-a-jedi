import atatwalker from 'media/spaceships/atatwalker.png';
import falcon from 'media/spaceships/falcon.png';
import fighter from 'media/spaceships/fighter.png';
import deathStar from 'media/spaceships/deathstar.png'
import xwing from 'media/spaceships/xwing.png';

const ships=[
  {
    name:'Falcon Millenium',
    type:'jedi',
    speed:50,
    fly:true,
    image:falcon
  },
  {
    name:'X Wing',
    type:'jedi',
    speed:80,
    fly:true,
    image:xwing
  },
  {
    name:'At-at Walker',
    type:'dark',
    speed:30,
    fly:false,
    image:atatwalker
  },
  {
    name:'Tie Fighter',
    type:'dark',
    speed:70,
    fly:true,
    image:fighter
  },
  {
    name:'Death Star',
    type:'dark',
    speed:30,
    fly:true,
    image:deathStar
  }
]

export default ships
