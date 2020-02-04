import falcon from 'media/spaceships/falcon.png';
import tiefighter from 'media/spaceships/tiefighter.png';
import deathStar from 'media/spaceships/deathstar.png'
import xwing from 'media/spaceships/xwing.png';
import awing from 'media/spaceships/awing.png';


const ships=[
  {
    name:'A Wing',
    mode:'jedi',
    attack:60,
    armor:30,
    image:awing,
    imageType:'png',
    price:400
  },
  {
    name:'Falcon Millenium',
    mode:'jedi',
    attack:50,
    armor:30,
    image:falcon,
    imageType:'png',
    price:900
  },
  {
    name:'X Wing',
    mode:'jedi',
    attack:80,
    armor:60,
    image:xwing,
    imageType:'png',
    price:1400
  },
  {
    name:'Tie Fighter',
    mode:'dark',
    attack:70,
    armor:40,
    image:tiefighter,
    imageType:'png',
    price:600
  },
  {
    name:'Death Star',
    mode:'dark',
    attack:120,
    armor:80,
    image:deathStar,
    imageType:'png',
    price:2000
  }
]

export default ships
