import React from 'react';
import { css } from '@emotion/react';
import { FaDiceD20 } from 'react-icons/fa';
import { sizeData } from '@/data';

interface Props {
  total: number;
  value: string;
  detailItemArray: React.ReactElement[];
  modSpanArray: React.ReactElement[];
}

const RollDetails = ({
  total, value, detailItemArray, modSpanArray,
}: Props) => {
  const style = css({
    margin: '20px 0',
    backgroundColor: '#eeeeee',
    padding: '10px',
    border: '2px solid #33333330',
    borderRadius: '10px',
    width: '100%',
    boxSizing: 'border-box',

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
    },

    '& > .roll-total': {
      fontWeight: '900',
      color: '#333333',
      marginBottom: '20px',

      '& > span': {
        color: '#ffffff',
        borderRadius: '10px',
        padding: '0 10px',
        backgroundColor: '#333333',
        display: 'inline-block',
      },
    },

    '& > .dice-label': {
      fontWeight: '900',
      color: '#333333',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      lineHeight: '1',

      '& > svg': {
        marginRight: '5px',
      },
    },

    '& > .detail-box': {
      '& > .mod-details-box': {
        padding: '5px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        border: '2px solid #33333350',
        marginTop: '10px',
      },
    },

    '@media all and (min-width: 1024px)': {
      '& > .roll-total, & > .dice-label': {
        fontSize: `${sizeData[6]}`,
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      '& > .roll-total, & > .dice-label': {
        fontSize: `${sizeData[6]}`,
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      '& > .roll-total, & > .dice-label': {
        fontSize: `${sizeData[5]}`,
      },
    },
    '@media all and (max-width: 479px)': {
      '& > .roll-total, & > .dice-label': {
        fontSize: `${sizeData[5]}`,
      },
    },
  });

  return (
    <>
      <div className='roll-detail' css={style}>
        <p className='dice-label'><FaDiceD20 />{value}</p>
        <h3 className='roll-total'>총합: <span>{total}</span></h3>
        <div className='detail-box'>
          <div className='dice-details-box'>
            {detailItemArray.map((item) => item)}
          </div>
          {modSpanArray.length !== 0
            ? (
              <p className='mod-details-box'>
                {modSpanArray.map((item) => item)}
              </p>
            )
            : ''}
        </div>
      </div>
    </>
  );
};

export default RollDetails;
