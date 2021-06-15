import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import Heading2 from '@/components/Contents/Heading2';
import TopDiceInput from '@/components/TopDiceInput';
import DiceResult from '@/components/Contents/DiceResult';

const custom = () => {
  return (
    <>
      <AppLayout>
        <TopDiceInput />
        <DiceResult />
      </AppLayout>
    </>
  );
};

export default custom;