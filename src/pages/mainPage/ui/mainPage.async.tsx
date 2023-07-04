import React, { Suspense } from 'react';

export const MainPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./mainPage')), 1500);
}));
export default MainPageAsync;
