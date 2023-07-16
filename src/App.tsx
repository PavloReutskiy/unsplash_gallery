import React from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router';
import { MainPage } from './components/MainPage';
import { PhotoModal } from './components/PhotoModal';
import { NotFound } from './components/NotFound';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/t/:collectionName" element={<MainPage />} />
          <Route path="/photos/:id" element={<MainPage />} />
          <Route path="/s/photos/:query" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <section className="banner">
        </section>

        <section className="gallery">
        </section>

        <nav className="pagination">
        </nav> */}
      </main>
    </div>
  );
};
