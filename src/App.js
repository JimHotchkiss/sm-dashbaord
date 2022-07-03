import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Navigation from './containers/navigation/Navigation';

function App() {
  return (
    <div className='app__container'>
      <Header />
      <div className='sidebar_navigation__container'>
        <Sidebar />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
