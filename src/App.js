import React from 'react'
import { NavBar } from './components/layout/NavBar';
import { AppRouter } from './router/AppRouter';


export const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}
