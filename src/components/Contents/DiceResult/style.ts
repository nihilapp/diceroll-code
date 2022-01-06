import { css } from '@emotion/react';
import { sizeData } from '@/data';

export const DiceResultStyle = css`
  & > .result-item {
    display: flex;
    flex-direction: row;
    margin: 30px 0;

    &:before {
      content: '\\f061';
      background-color: #999999;
      border-radius: 40px;
      margin-right: 20px;
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
      display: flex;
      align-items: center;
      padding: 10px;
      color: #ffffff;
    }

    &:nth-of-type(1) {
      margin-top: 20px;

      &:before {
        background-color: #333333;
      }
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > .item-body {
      padding: 10px 0;
      flex: 1;

      & > .message-box {
        font-weight: 900;
        color: #333333;
        background-color: #eeeeee;
        padding: 10px;
        border: 2px solid #33333330;
        border-radius: 10px;
        letter-spacing: -1px;

        & span {
          &.red {
            background-color: #ce1c1c;
            color: #ffffff;
            padding: 0 10px;
            border-radius: 5px;
            margin-right: 10px;
            font-size: 90%;
          }

          &.blue {
            background-color: #5d88f930;
            color: #5d88f9;
            padding: 0 10px;
            border-radius: 5px;
            font-size: 90%;
            margin: 0 2px;
            box-sizing: border-box;
            border: 1px solid #5d88f990;
          }
        }
      }
    }

    @media all and (min-width: 1024px) {
      & .message-box {
        font-size: ${sizeData[6]};
      }

      &:before {
        font-size: ${sizeData[7]};
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      & .message-box {
        font-size: ${sizeData[6]};
      }

      &:before {
        font-size: ${sizeData[7]};
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      & .message-box {
        font-size: ${sizeData[5]};
      }

      &:before {
        font-size: ${sizeData[7]};
      }
    }

    @media all and (max-width: 479px) {
      & .message-box {
        font-size: ${sizeData[5]};
      }

      &:before {
        font-size: ${sizeData[7]};
      }
    }
  }
`;
