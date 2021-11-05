import React from 'react'
import { NavBar } from './components/layout/NavBar';
import { AppRouter } from './router/AppRouter';

import { UserContextProvider } from './context/userContext'

export const App = () => {
  return (
    <>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </>
  );
}
