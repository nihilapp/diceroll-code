import React from 'react';
import { css } from '@emotion/react';
import { FaDiceD20, FaArrowCircleRight } from 'react-icons/fa';
import { sizeData } from '@/data';

interface Props {
  dice: string;
  diceItemBox: React.ReactElement[];
  total: number;
}

const DiceDetails = ({ dice, diceItemBox, total, }: Props) => {
  const style = css({
    margin: '4px 0',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    border: '2px solid #33333350',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
    },

    '& > .dice-label': {
      padding: '5px 10px',
      backgroundColor: '#555555',
      color: '#ffffff',
      borderRadius: '5px 0 0 5px',
      fontWeight: '900',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',
      marginTop: '2px',
      marginBottom: '2px',
      letterSpacing: '-1px',

      '& > svg': {
        marginRight: '5px',
      },
    },

    '& > .dice-total': {
      padding: '5px 10px',
      marginRight: '5px',
      backgroundColor: '#333333',
      color: '#ffffff',
      borderRadius: '0 5px 5px 0',
      fontWeight: '900',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',
      marginTop: '2px',
      marginBottom: '2px',
      letterSpacing: '-1px',

      '& > svg': {
        marginRight: '5px',
      },
    },
  }, {
    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[2]}`,
    },
  });

  return (
    <>
      <p className='box-item' css={style}>
        <span className='dice-label'><FaDiceD20 />{dice}</span>
        <span className='dice-total'><FaArrowCircleRight />{total}</span>
        {diceItemBox}
      </p>
    </>
  );
};

export default DiceDetails;
