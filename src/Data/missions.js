import thyferra from 'media/missions/thyferra.jpeg';
import yavinfour from 'media/missions/yavinfour.jpg';
import delrakkin from 'media/missions/delrakkin.jpg';
import tattoine from 'media/missions/tattoine.png';
import togoria from 'media/missions/togoria.jpg';
import boonda from 'media/missions/boonda.jpeg';
import vactooine from 'media/missions/vactooine.jpeg';

const missions=[
  {
    title:'Escape from Thyferra',
    detail:'The Rebel forces have found an Imperial conspiracy involving contaminated bacta, a deadly substance that can poison entire planets. Travel to Thyferra and try to stop the Empire before it\'s too Late. Beware of stormtroopers squadrons!',
    mode:'jedi',
    location:'thyferra',
    level:1,
    image:thyferra
  },
  {
    title:'Assault on Yavin Four',
    detail:'The first Death Star has been destroyed. But the Empire remains. A rebel base has been identified on Yavin Four. Your mission: Launch the assault on the base and capture all rebels… at any cost.',
    mode:'dark',
    location:'yavin four',
    level:2,
    image:yavinfour
  },
  {
    title:'Attack on Delrakkin',
    detail:'Imperial troops are bombarding the planet of Delrakkin—disguised as Rebel forces! The Empire wants the Rebel Alliance to be blamed for the attack. The Rebels must stop this evil deception. Your mission: to defend Delrakkin…and save the Rebellion.',
    mode:'jedi',
    location:'delrakkin',
    level:2,
    image:delrakkin
  },
  {
    title:'The Hunt for Han Solo',
    detail:'Your target is Han Solo. The Empire wants him – dead or alive. He is on his way to Tatooine to deliver something very important to Jabba. You must reach him first. Your mission: to hunt down Han Solo before he gets away.',
    mode:'dark',
    location:'tattoine',
    level:2,
    image:tattoine
  },
  {
    title:'Togorian Trap',
    detail:'The Galactic Empire has sent you to Togoria to trap the Rebels Han Solo, Princess Leia, and Luke Skywalker. To find them, you must travel through the wilds of Togoria, where fierce creatures stalk their prey. A great reward awaits you – if you can survive. Your mission: to ensnare the Rebels and bring glory to the Empire.',
    mode:'dark',
    location:'togoria',
    level:3,
    image:togoria
  },
  {
    title:'Revolt of the Battle Droids',
    detail:'A revolt has begun on Boonda the Hutt\'s moon. The leader of the revolution is the devious droid Wuntoo Forcee Forwun. His army is made up of hundreds of droids... and they are all prepared to kill on sight. Your mission: to stop the battle droids before they take on the Empire.',
    mode:'dark',
    location:'boonda',
    level:3,
    image:boonda
  },
  {
    title:'The Vactooine Disaster',
    detail:'The planet Vactooine is in grave danger—a squadron of ruthless battle droids is about to attack. The droids are part of a sinister conspiracy to control the galaxy. As a member of the Rebel Alliance, you must protect the innocent planet from certain doom. Your mission: to prevent the Vactooine Disaster!',
    mode:'jedi',
    location:'vactooine',
    level:3,
    image:vactooine
  }


]

export default missions
