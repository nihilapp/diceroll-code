import React from 'react';
import { v4 as uuid } from 'uuid';
import DiceItem from '@/components/Contents/DiceItem';
import DiceDetails from '@/components/Contents/DiceDetails';

let roll;
let color;
let total;
let diceItemBox = [];
let dicetotal = [];

// 값을 찾기 위한 정규식을 마련한다.
const dicesString = /\w+(?=[D])/i;
const suffixString = /(?<=d)[0-9.]+/i;

const getRollDice = (dice, select, dicebox, detailItemArray, multi = 1) => {
  for (let m = 1; m <= multi; m++) {
    const dicesArray = dice.match(dicesString);
    let dices = dicesArray ? Number(dicesArray[0]) : 1;
  
    const suffixArray = dice.match(suffixString);
    let suffix = Number(suffixArray[0]);
  
    for (let r = 0; r < dices; r++) {
      if (select.value === 'maximum') {
        roll = suffix;
      } else if (select.value === 'minimum') {
        roll = 1;
      } else if (select.value === 'normal') {
        roll = Math.ceil(Math.random() * suffix);
      }
    
      if (roll === suffix) {
        color = 'critical';
      } else if (roll === 1) {
        color = 'fumble';
      } else {
        color = 'normal';
      }
    
      const diceItem = <DiceItem key={uuid()} roll={roll} color={color} />;
    
      diceItemBox.push(diceItem);
      dicebox.push(roll);
      dicetotal.push(roll);
    }
  
    total = dicetotal.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0);
  
    const detailItem = <DiceDetails key={uuid()} dice={dice} diceItemBox={diceItemBox} total={total} />;
    diceItemBox = [];
    dicetotal = [];
  
    detailItemArray.push(detailItem);
  }
  
  return {
    detailItemArray,
    dicebox,
  };
};

export default getRollDice;