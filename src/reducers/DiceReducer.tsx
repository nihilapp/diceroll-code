import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IState } from '@/types';
import getRollDice from '@/utils/getRollDice';
import { ModItem, RollDetails } from '@/components/Contents';

const initialState: IState[] = [ {
  ErrorMessage: (<>다이스를 굴리세요.</>),
  dicedetails: [],
}, ];

export const DiceReducer = createSlice({
  name: 'DiceReducer',
  initialState,
  reducers: {
    RollDice: (state, { payload, }) => {
      let rolldicedetails: React.ReactElement[] = [];

      // 값을 분리한다.
      const value: string[] = payload.value.split(' ');

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
            ErrorMessage: (
              <><span className='red'>에러 1</span>값이 없습니다. 주사위식을 입력하세요.</>
            ),
            dicedetails: [],
          },
        ];
      }

      // 숫자를 입력하지 않으면 실행하지 않는다.
      if (value.indexOf('d' || 'ㅇ') !== -1) {
        if (value.indexOf('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') === -1) {
          return [
            ...state, {
              ErrorMessage: (<><span className='red'>에러 2</span>숫자를 같이 입력해야합니다.</>),
              dicedetails: [],
            },
          ];
        }
      }

      // D를 두개 적으면 실행하지 않는다.
      if (value.includes('DD' && 'dd')) {
        return [
          ...state, {
            ErrorMessage: (
              <><span className='red'>에러 3</span><span className='blue'>D</span>는 하나만 입력하고 숫자를 입력해야 합니다.</>
            ),
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
              ErrorMessage: (<><span className='red'>에러 5</span>보너스 값을 정확히 입력해야 합니다.</>),
              dicedetails: [],
            },
          ];
        }

        let newValue: string;
        let dice: string;
        let mod: number;
        let rolldetail: React.ReactElement;
        let dicestotal: number;
        let modSpan: React.ReactElement;
        let modSpanArray: React.ReactElement[] = [];
        let modArray: number[] = [];
        let modTotal: number;
        let rollDice = {};
        let lastValue: string[];
        let dicebox: number[] = [];
        let detailItemArray: React.ReactElement[] = [];

        const select = document.getElementById('roll-type') as HTMLSelectElement;

        // 모든 다이스 스트링을 D로 통일한다.
        // if (value[x].match(/[dㅇ]/gi) !== -1) {

        // }

        newValue = value[x].replace(/[dㅇ]/gi, 'D');

        // D가 없으면 실행하지 않는다.
        if (newValue.indexOf('D') === -1) {
          return [
            ...state, {
              ErrorMessage: (
                <><span className='red'>에러 8</span>주사위식에 <span className='blue'>D</span>가 필요합니다.</>
              ),
              dicedetails: [],
            },
          ];
        }

        // +로 다시 값을 분리한다.
        const newValues = newValue.split('+');

        while (newValues.includes('')) {
          if (newValues.indexOf('') !== -1) {
            newValues.splice(newValues.indexOf(''), 1);
          } else {
            break;
          }
        }

        // +를 두개 이상 입력하면 실행하지 않는다.
        if (newValue.indexOf('++') !== -1) {
          return [
            ...state, {
              ErrorMessage: (
                <><span className='red'>에러 6</span><span className='blue'>+</span>는 하나만 입력하고 숫자를 입력해야 합니다.</>
              ),
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
                ErrorMessage: (
                  <><span className='red'>에러 4</span><span className='blue'>D</span> 뒤에 숫자를 입력해야합니다.</>
                ),
                dicedetails: [],
              },
            ];
          } else if (newValues[xx].indexOf('DD') !== -1) {
            return [
              ...state, {
                ErrorMessage: (
                  <><span className='red'>에러 3</span><span className='blue'>D</span>는 하나만 입력해야합니다.</>
                ),
                dicedetails: [],
              },
            ];
          }

          // 아무것도 선택하지 않고 다이스를 굴리면 에러
          if (newValues[xx].includes('none')) {
            return [
              ...state, {
                ErrorMessage: (<><span className='red'>에러 7</span>굴릴 주사위를 선택해야합니다.</>),
                dicedetails: [],
              },
            ];
          }

          if (newValues[xx].includes('D')) {
            dice = newValues[xx];
            // 값에 D가 포함되어있으면 다이스로 분류.

            if (dice.includes('-')) {
              return [
                ...state, {
                  ErrorMessage: (
                    <>
                      <span className='red'>에러 9</span>패널티 값을 넣을 때에는 <span className='blue'>[Dn+-n]</span>
                      의 형식을 따라야 합니다.
                    </>
                  ),
                  dicedetails: [],
                },
              ];
            } else if (dice.includes('*')) {
              lastValue = dice.split('*');
              rollDice = getRollDice(lastValue[0], select, dicebox, detailItemArray, lastValue[1]);
            } else {
              // eslint-disable-next-line no-unused-vars
              rollDice = getRollDice(dice, select, dicebox, detailItemArray);
            }
          } else {
            mod = Number(newValues[xx]);
            const modValue = newValues[xx];

            const numberIgnoreSearch = /[^0-9]/g;
            const numberSearch = /[0-9]/g;
            const matchNoNumberArray = modValue.match(numberIgnoreSearch);
            const matchNumberArray = modValue.match(numberSearch);

            if (modValue.includes('-')) {
              if (matchNoNumberArray.length !== 1) {
                return [
                  ...state, {
                    ErrorMessage: (<><span className='red'>에러 10</span>패널티 값을 정확히 입력해야 합니다.</>),
                    dicedetails: [],
                  },
                ];
              } else if (matchNumberArray === null) {
                return [
                  ...state, {
                    ErrorMessage: (<><span className='red'>에러 10</span>패널티 값을 정확히 입력해야 합니다.</>),
                    dicedetails: [],
                  },
                ];
              } else {
                modSpan = <ModItem key={uuid()} modType='penaltyMod' value={mod} />;
              }
            } else {
              modSpan = <ModItem key={uuid()} modType='bonusMod' value={`+${mod}`} />;
            }

            modSpanArray.push(modSpan);
            modArray.push(mod);
          }
        }

        dicestotal = dicebox.reduce((pre, crr) => Number(pre) + Number(crr), 0);
        modTotal = modArray ? modArray.reduce((pre, crr) => Number(pre) + Number(crr), 0) : 0;
        dicestotal += modTotal;

        rolldetail = (
          <RollDetails
            key={uuid()}
            total={dicestotal}
            value={newValue}
            detailItemArray={detailItemArray}
            modSpanArray={modSpanArray}
          />
        );

        rolldicedetails.push(rolldetail);

        modSpanArray = [];
      }

      state.push({
        ErrorMessage: '',
        dicedetails: rolldicedetails,
      });
    },
    ResetForm: () => initialState,
  },
});

export const { RollDice, ResetForm, } = DiceReducer.actions;

export default DiceReducer.reducer;
