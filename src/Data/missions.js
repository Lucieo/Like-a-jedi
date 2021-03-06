import thyferra from 'media/missions/thyferra.jpeg';
import delrakkin from 'media/missions/delrakkin.jpg';
import tattoine from 'media/missions/tattoine.jpg';
import togoria from 'media/missions/togoria.jpg';
import boonda from 'media/missions/boonda.jpeg';
import vactooine from 'media/missions/vactooine.jpg';

const missions=[
  {
    title:'Escape from Thyferra',
    detail:'The Rebel forces have found an Imperial conspiracy involving contaminated bacta, a deadly substance that can poison entire planets. Travel to Thyferra and try to stop the Empire before it\'s too Late. Beware of stormtroopers squadrons!',
    mode:'jedi',
    location:'thyferra',
    level:1,
    image:thyferra,
    'credit-bonus':300,
    'experience-bonus':50,
    attack:40,
    armor:50
  },
  {
    title:'Assault on Thyferra',
    detail:'The first Death Star has been destroyed. But the Empire remains. A rebel base has been identified on Thyferra. Your mission: Launch the assault on the base and capture all rebels… at any cost.',
    mode:'dark',
    location:'thyferra',
    level:1,
    image:thyferra,
    'credit-bonus':275,
    'experience-bonus':90,
    attack:50,
    armor:40
  },
  {
    title:'Attack on Delrakkin',
    detail:'Imperial troops are bombarding the planet of Delrakkin—disguised as Rebel forces! The Empire wants the Rebel Alliance to be blamed for the attack. The Rebels must stop this evil deception. Your mission: to defend Delrakkin…and save the Rebellion.',
    mode:'jedi',
    location:'delrakkin',
    level:2,
    image:delrakkin,
    'credit-bonus':650,
    'experience-bonus':110,
    attack:80,
    armor:100
  },
  {
    title:'The Hunt for Han Solo',
    detail:'Your target is Han Solo. The Empire wants him – dead or alive. He is on his way to Tatooine to deliver something very important to Jabba. You must reach him first. Your mission: to hunt down Han Solo before he gets away.',
    mode:'dark',
    location:'tattoine',
    level:2,
    image:tattoine,
    'credit-bonus':700,
    'experience-bonus':120,
    attack:100,
    armor:110
  },
  {
    title:'Togorian Trap',
    detail:'The Galactic Empire has sent you to Togoria to trap the Rebels Han Solo, Princess Leia, and Luke Skywalker. To find them, you must travel through the wilds of Togoria, where fierce creatures stalk their prey. A great reward awaits you – if you can survive. Your mission: to ensnare the Rebels and bring glory to the Empire.',
    mode:'dark',
    location:'togoria',
    level:3,
    image:togoria,
    'credit-bonus':900,
    'experience-bonus':170,
    attack:100,
    armor:120
  },
  {
    title:'Revolt of the Battle Droids',
    detail:'A revolt has begun on Boonda the Hutt\'s moon. The leader of the revolution is the devious droid Wuntoo Forcee Forwun. His army is made up of hundreds of droids... and they are all prepared to kill on sight. Your mission: to stop the battle droids before they take on the Empire.',
    mode:'dark',
    location:'boonda',
    level:3,
    image:boonda,
    'credit-bonus':950,
    'experience-bonus':180,
    attack:140,
    armor:120
  },
  {
    title:'The Vactooine Disaster',
    detail:'The planet Vactooine is in grave danger—a squadron of ruthless battle droids is about to attack. The droids are part of a sinister conspiracy to control the galaxy. As a member of the Rebel Alliance, you must protect the innocent planet from certain doom. Your mission: to prevent the Vactooine Disaster!',
    mode:'jedi',
    location:'vactooine',
    level:3,
    image:vactooine,
    'credit-bonus':900,
    'experience-bonus':200,
    attack:200,
    armor:300
  }


]

export default missions
