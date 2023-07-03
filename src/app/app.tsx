import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import 'shared/config/i18-n/i18n';

function App() {
  const { theme, toggleTheme } = useTheme();
  const cls = classNames('app', { hovered: true, selectable: false }, [theme, 'secondadditional']);
  return (
      <div className={cls}>
          <Suspense fallback={<div>loading...</div>}>
              <Navbar />
              <div className="content-page">

                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
}

export default App;
