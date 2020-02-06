import {DvArmor, BattleDroid,DarthVader, StBlaster, StormTrooperMask, LaserSword, LaserSword2, Stick, Porg, R2D2,BlasterSolo, Spear} from 'media/icons';


const equipment=[
  {
    name:'Darth Vader Armor',
    mode:'dark',
    armor:70,
    attack:0,
    image:DvArmor,
    price:200,
    imageType:'svg'
  },
  {
    name:'Battle Droid',
    mode:'dark',
    armor:50,
    attack:30,
    image:BattleDroid,
    price:120,
    imageType:'svg'
  },
  {
    name:'Vador Mask',
    mode:'dark',
    armor:70,
    attack:0,
    image:DarthVader,
    price:100,
    imageType:'svg'
  },
  {
    name:'Storm Trooper Blaster',
    mode:'dark',
    attack:40,
    armor:0,
    image:StBlaster,
    price:60,
    imageType:'svg'
  },
  {
    name:'Storm Trooper Mask',
    mode:'dark',
    armor:40,
    attack:0,
    image:StormTrooperMask,
    price:40,
    imageType:'svg'
  },
  {
    name:'Vader Laser Sword',
    mode:'dark',
    attack:60,
    armor:0,
    image:LaserSword2,
    price:140,
    imageType:'svg'
  },
  {
    name:'Solo Blaster',
    mode:'jedi',
    attack:40,
    armor:0,
    image:BlasterSolo,
    price:80,
    imageType:'svg'
  },
  {
    name:'Ewoke Spear',
    mode:'jedi',
    attack:40,
    armor:0,
    image:Spear,
    price:30,
    imageType:'svg'
  },
  {
    name:'Luke Laser Sword',
    mode:'jedi',
    attack:70,
    armor:0,
    image:LaserSword,
    price:140,
    imageType:'svg'
  },
  {
    name:'Yoda Stick',
    mode:'jedi',
    attack:30,
    armor:0,
    image:Stick,
    price:20,
    imageType:'svg'
  },
  {
    name:'Porg',
    mode:'jedi',
    armor:10,
    attack:0,
    image:Porg,
    price:10,
    imageType:'svg'
  },
  {
    name:'R2D2',
    mode:'jedi',
    armor:50,
    attack:20,
    image:R2D2,
    price:100,
    imageType:'svg'
  },
]

export default equipment
