import React from 'react';
import { v4 as uuid } from 'uuid';
import DiceItem from '@/components/Contents/DiceItem';
import DiceDetails from '@/components/Contents/DiceDetails';
import ModItem from '@/components/Contents/ModItem';
import RollDetails from '@/components/Contents/RollDetails';

export const ROLL_DICE = 'ROLL_DICE';
export const RESET_FORM = 'RESET_FORM';

const DiceReduser = (state, action) => {
  switch (action.type) {
    case ROLL_DICE: {
      let rolldicedetails = [];
      
      // 값을 분리한다.
      const value = action.value.split(' ');
      
      // 비어있는 원소가 있으면 없애버린다.
      while (value.includes('')) {
        if (value.indexOf('') !== -1) {
          value.splice(value.indexOf(''), 1);
        } else {
          break;
        }
      }
      
      // 배열이 비어있으면 실행하지 않는다.
      if (value.length === 0) {
        return [
          ...state, {
            ErrorMessage: (<><span className={'red'}>에러 1</span>값이 없습니다. 주사위식을 입력하세요.</>),
            dicedetails: [],
          },
        ];
      }
      
      // 숫자를 입력하지 않으면 실행하지 않는다.
      if (value.indexOf('d' || 'ㅇ') !== -1) {
        if (value.indexOf('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') === -1) {
          return [
            ...state, {
              ErrorMessage: (<><span className={'red'}>에러 2</span>숫자를 같이 입력해야합니다.</>),
              dicedetails: [],
            },
          ];
        }
      }
      
      // D를 두개 적으면 실행하지 않는다.
      if (value.includes('DD' && 'dd')) {
        return [
          ...state, {
            ErrorMessage: (<><span className={'red'}>에러 3</span>D는 하나만 입력하고 숫자를 입력해야 합니다.</>),
            dicedetails: [],
          },
        ];
      }
      
      // 분할한 값들을 처리한다.
      for (let x = 0; x <= value.length - 1; x++) {
        // 더할 값을 정확하게 입력하지 않으면 실행하지 않는다.
        if (value[x].indexOf('+') === value[x].length - 1) {
          return [
            ...state, {
              ErrorMessage: (<><span className={'red'}>에러 5</span>더할 값을 정확히 입력해야 합니다.</>),
              dicedetails: [],
            },
          ];
        }
        
        let newValue;
        let dice;
        let mod;
        let dicebox = [];
        let detailItemArray = [];
        let diceItemBox = [];
        let roll;
        let color;
        let diceItem;
        let rolldetail;
        let dicetotal;
        let detailItem;
        let modSpan;
        let modSpanArray = [];
        let modArray = [];
        let modTotal;
        
        const select = document.getElementById('roll-type');
        
        // 모든 다이스 스트링을 D로 통일한다.
        if (value[x].match(/[dㅇ]/gi) !== -1) {
          newValue = value[x].replace(/[dㅇ]/gi, 'D');
        }
  
        const diceprefix = /[D]/gi;
        
        // D가 없으면 실행하지 않는다.
        if (value[x].match(diceprefix) === -1) {
          return [
            ...state, {
              ErrorMessage: (<><span className={'red'}>에러 8</span>주사위식에 D가 필요합니다.</>),
              dicedetails: [],
            },
          ];
        }
        
        // +로 다시 값을 분리한다.
        const newValues = newValue.split('+');
        
        // 값을 찾기 위한 정규식을 마련한다.
        const dicesString = /\w+(?=[D])/i;
        const suffixString = /(?<=d)[0-9.]+/i;
        
        while (newValues.includes('')) {
          if (newValues.indexOf('') !== -1) {
            newValues.splice(newValues.indexOf(''), 1);
          } else {
            break;
          }
        }
        
        // +를 두개 이상 입력하면 실행하지 않는다.
        if (newValue.indexOf('++') !== - 1) {
          return [
            ...state, {
              ErrorMessage: (<><span className={'red'}>에러 6</span>+는 하나만 입력하고 숫자를 입력해야 합니다.</>),
              dicedetails: [],
            },
          ];
        }
        
        // 추가적으로 분리한 값을 처리한다.
        for (let xx = 0; xx <= newValues.length - 1; xx++) {
          // D의 뒤에 숫자를 입력하지 않으면 실행하지 않는다.
          if (newValues[xx].indexOf('D') === newValues[xx].length - 1) {
            return [
              ...state, {
                ErrorMessage: (<><span className={'red'}>에러 4</span>D 뒤에 숫자를 입력해야합니다.</>),
                dicedetails: [],
              },
            ];
          } else if (newValues[xx].indexOf('DD') !== - 1) {
            return [
              ...state, {
                ErrorMessage: (<><span className={'red'}>에러 3</span>D는 하나만 입력하고 숫자를 입력해야 합니다.</>),
                dicedetails: [],
              },
            ];
          }

          // 아무것도 선택하지 않고 다이스를 굴리면 에러
          if (newValues[xx].includes('none')) {
            return [
              ...state, {
                ErrorMessage: (<><span className={'red'}>에러 7</span>굴릴 주사위를 선택해야합니다.</>),
                dicedetails: [],
              },
            ];
          }
  
          if (newValues[xx].includes('D')) {
            dice = newValues[xx];
            // 값에 D가 포함되어있으면 다이스로 분류.
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
  
              diceItem = <DiceItem key={uuid()} roll={roll} color={color} />;
  
              diceItemBox.push(diceItem);
              dicebox.push(roll);
            }
            
            detailItem = <DiceDetails key={uuid()} dice={dice} diceItemBox={diceItemBox} />;
            
            detailItemArray.push(detailItem);
            diceItemBox = [];
          } else {
            if (newValues[xx].includes('-')) {
              // 값에 -가 있으면 패널티 추가값으로 분류.
              mod = Number(newValues[xx]);
    
              modSpan = <ModItem key={uuid()} modType={'penaltyMod'} value={mod} />;
    
              modSpanArray.push(modSpan);
              modArray.push(mod);
            } else {
              // 값에 D가 없으면 추가값으로 분류.
              mod = newValues[xx];
    
              modSpan = <ModItem key={uuid()} modType={'bonusMod'} value={`+${mod}`} />;
              
              modSpanArray.push(modSpan);
              modArray.push(mod);
            }
          }
        }
        
        dicetotal = dicebox.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0);
        modTotal = modArray ? modArray.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0) : 0;
        dicetotal = dicetotal + modTotal;
        
        rolldetail = (
          <RollDetails
            key={uuid()}
            total={dicetotal}
            value={newValue}
            detailItemArray={detailItemArray}
            modSpanArray={modSpanArray}
          />
        );
        
        rolldicedetails.push(rolldetail);
        
        modSpanArray = [];
      }
      
      return [
        ...state, {
          ErrorMessage: '',
          dicedetails: rolldicedetails,
        },
      ];
    }
    case RESET_FORM:
      return [ {
        ErrorMessage: (<>다이스를 굴리세요.</>),
        dicedetails: [],
      }, ];
    default:
      return state;
  }
};

export default DiceReduser;