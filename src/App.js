import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Iphones from './component/iPhones/Iphones';
import IphoneDetail from './component/iPhones/IphoneDetail';
import Main from './component/Main/Main';
import Mac from './component/mac/Mac';
import Page404 from './component/404Page/Page404';
import News from './component/News/News';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/iphone" element={<Iphones />} />
          <Route path="/iphone/:pid" element={<IphoneDetail />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;