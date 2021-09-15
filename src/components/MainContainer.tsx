import React from 'react';
import { IHaveChildren } from '@/types';

const MainContainer = ({ children, }: IHaveChildren) => (
  <>
    <main>
      {children}
    </main>
  </>
);

export default MainContainer;
