import React from "react";
import ReactDOM from 'react-dom/client';
import Hedder from "./componets/Hedder";  
import Footer from "./componets/Footer";  
import List from "./list/List";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <div className='app'>
    <div className='app-hedder'>
      <Hedder />
    </div>

    <div className='app-body'>
      <List />
    </div>
    <Footer />
  </div>
);
