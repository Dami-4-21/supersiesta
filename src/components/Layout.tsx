import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}