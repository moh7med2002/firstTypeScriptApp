import React ,{createContext} from 'react';
import Footer from './components/Footer';
import HomeApp from './components/Home/HomeApp';
import Navbar from './components/Navbar';
import{ Route, Routes} from 'react-router-dom'
import AboutPage from './components/AboutFolder/AboutPage';
import PackagesPage from './components/PackagesFolder/PackagesPage';
import Bookpage from './components/BookFolder/BookPage';




function App() {

  

  return (
    <div className="App" >
      <div className='px-6  fixed z-50 w-[100%] bg-white'>
                <Navbar/>
            </div>
      <Routes>
        <Route path='/' element={<HomeApp/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/packages' element={<PackagesPage/>}/>
        <Route path='/bookNow' element={<Bookpage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
