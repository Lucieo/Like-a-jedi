import ewokespear from 'media/gear/ewokespear.png';
import hansoloblaster from 'media/gear/hansoloblaster.png';
import lukelasersword from 'media/gear/lukelasersword.png';
import yodastick from 'media/gear/yodastick.png';
import vaderlasersword from 'media/gear/vaderlasersword.png';
import stormtroopermask from 'media/gear/stormtroopermask.png';

const gear=[
  {
    name:'Storm Trooper Mask',
    type:'dark',
    protection:40,
    image:stormtroopermask
  },
  {
    name:'Vader Laser Sword',
    type:'dark',
    attack:60,
    image:vaderlasersword
  },
  {
    name:'Solo Blaster',
    type:'jedi',
    attack:40,
    image:hansoloblaster
  },
  {
    name:'Ewoke Spear',
    type:'jedi',
    attack:40,
    image:ewokespear
  },
  {
    name:'Luke Laser Sword',
    type:'jedi',
    attack:70,
    image:lukelasersword
  },
  {
    name:'Yoda Stick',
    type:'jedi',
    attack:30,
    image:yodastick
  }
]

export default gear
