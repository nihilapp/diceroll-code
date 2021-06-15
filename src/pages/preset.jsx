import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import TopDicePreset from '@/components/TopDicePreset';
import Heading2 from '@/components/Contents/Heading2';
import DiceResult from '@/components/Contents/DiceResult';

const preset = () => {
  return (
    <>
      <AppLayout>
        <TopDicePreset />
        <DiceResult />
      </AppLayout>
    </>
  );
};

export default preset;