import React from 'react';
import { css } from '@emotion/react';

const MainContainer = ({ children, }) => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
};

export default MainContainer;