import React from 'react'
// import Home from './Container/home'
import "./App.css"
import More from './Component/About';
import Clothes from './Component/Clothes';
import Catalog2 from './Component/Catalog';


function App() {
  return (
    <div>
       <More />
    
    {/* //   <Home /> */}
       <Clothes />

       <Catalog2 />

    </div>
    
  );
}

export default App;
