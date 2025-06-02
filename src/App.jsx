import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Provider
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';

// 共用元件
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// 頁面
import Home from './pages/Home';
import About from './pages/About';
import RecipeMap from './pages/RecipeMap';
import RecipeDetail from './pages/RecipeDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="page-layout">
      <HashRouter>
        <AuthProvider>
          <UIProvider>
            <ScrollToTop />
             <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/map" element={<RecipeMap />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
             <Footer />
          </UIProvider>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}
