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
    type:'dark',
    protection:70,
    image:DvArmor
  },
  {
    name:'Battle Droid',
    type:'dark',
    protection:50,
    image:BattleDroid
  },
  {
    name:'Vador Mask',
    type:'dark',
    protection:70,
    image:DarthVaderMask
  },
  {
    name:'Storm Trooper Blaster',
    type:'dark',
    attack:40,
    image:StBlaster
  },
  {
    name:'Storm Trooper Mask',
    type:'dark',
    protection:40,
    image:StormTrooperMask
  },
  {
    name:'Vader Laser Sword',
    type:'dark',
    attack:60,
    image:LaserSword2
  },
  {
    name:'Solo Blaster',
    type:'jedi',
    attack:40,
    image:Blaster
  },
  {
    name:'Ewoke Spear',
    type:'jedi',
    attack:40,
    image:Spear
  },
  {
    name:'Luke Laser Sword',
    type:'jedi',
    attack:70,
    image:LaserSword
  },
  {
    name:'Yoda Stick',
    type:'jedi',
    attack:30,
    image:Stick
  },
  {
    name:'Porg',
    type:'jedi',
    protection:10,
    image:Porg
  },
  {
    name:'R2D2',
    type:'jedi',
    protection:50,
    image:R2D2
  },
]

export default equipment
