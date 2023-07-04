import React from 'react';

export const AboutPageAsync = React.lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./aboutPage')), 1500);
}));

export default AboutPageAsync;
