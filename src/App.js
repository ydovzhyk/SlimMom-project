import React from 'react';
import { I18nextProvider } from 'react-i18next';
import UserRoutes from './components/Routes/UserRoutes.jsx';
import i18n from './components/helpers/i18next';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        <main>
          <UserRoutes />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
