import {ReactComponent as Blaster} from 'media/equipment/blasterSolo.svg';
import {ReactComponent as DarthVaderMask} from 'media/equipment/darthvader.svg';
import {ReactComponent as Spear} from 'media/equipment/spear.svg';
import {ReactComponent as Stick} from 'media/equipment/stick.svg';
import {ReactComponent as LaserSword2} from 'media/equipment/lasersword3.svg';
import {ReactComponent as LaserSword} from 'media/equipment/lasersword2.svg';
import {ReactComponent as StormTrooperMask} from 'media/equipment/stormtrooper.svg';
import {ReactComponent as Porg} from 'media/equipment/porg.svg';
import {ReactComponent as R2D2} from 'media/equipment/r2d2.svg';
import {ReactComponent as StBlaster} from 'media/equipment/stblaster.svg';
import {ReactComponent as BattleDroid} from 'media/equipment/battledroid.svg';
import {ReactComponent as DvArmor} from 'media/equipment/dvArmor.svg';

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
    attack:0,
    image:BattleDroid,
    price:120,
    imageType:'svg'
  },
  {
    name:'Vador Mask',
    mode:'dark',
    armor:70,
    attack:0,
    image:DarthVaderMask,
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
    image:Blaster,
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
    attack:0,
    image:R2D2,
    price:100,
    imageType:'svg'
  },
]

export default equipment
