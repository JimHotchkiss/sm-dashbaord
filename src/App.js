import './App.css';
import { useState } from 'react';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Navigation from './containers/navigation/Navigation';
import Table from './containers/table/Table';

function App() {

  const [showTable, setShowTable]=useState(false)
  return (
    <div className='app__container'>
      <Header />
      <div className='sidebar_navigation__container'>
        <Sidebar />
        <Navigation 
          showTable={showTable}
          setShowTable={setShowTable}/>
        {showTable ? <Table /> : null}
      </div>
    </div>
  );
}

export default App;
