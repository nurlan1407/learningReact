import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t, i18n } = useTranslation('about');
  return (
      <h1>{t('о нас')}</h1>
  );
}

export default AboutPage;
