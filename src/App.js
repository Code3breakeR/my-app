import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import Home from './Home.js';
import UserConfiguration from './UserConfiguration';
import Alert from './Alert';
import Footer from './Footer';
import Calci from './Calci';
import WeatherApp from './WeatherApp.js';
// import News from './News';
import Anime from './Anime';
// import SideBar from './SideBar';
import Login from './Login.js';
import Images from './Images';
import Contact from './Contact';
import NoteState from './context/notes/NoteState';


function App() {
  const [trigger, setTrigger] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [active, setActive] = useState('');
  const clickHandler = (txt) => {
    setActive(txt)
  }
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const tick = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000)
    return () => clearInterval(tick);
  }, []);

  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  const toggle = () => {
    if (mode.color === 'black') {
      setMode({
        color: 'white',
        backgroundColor: '#282A35'
      })
      // let colorName = prompt('Enter BackGroundColor');
      // document.body.style.backgroundColor = colorName;
      document.body.style.backgroundColor = 'gray';
      showAlert('Success :', 'Dark Mode has been Enable')
      setTimeout(() => {
        setAlert(null);
      }, 2000)
    }
    else {
      setMode({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = "white"
      showAlert('Success :', 'Light Mode has been Enable')
      setTimeout(() => {
        setAlert(null);
      }, 2000)
    }
  }

  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>

          <div className='time'>
            <label>
              {currentTime.getDate()} {currentTime.toLocaleDateString('en-US', { month: "long" }).substring(0, 3)} {currentTime.getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{String(currentTime.getHours()).padStart(2, '0')}:{String(currentTime.getMinutes()).padStart(2, '0')}
              <label> &nbsp; hours</label>
            </label>
          </div>

          <Navbar toggleStyle={toggle} active={active} mode={mode} clickHandler={clickHandler} setTrigger={setTrigger} navbar={navbar} setNavbar={setNavbar} />
          <Alert alert={alert} mode={mode} />
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/home" element={<Home mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/contact" element={<Contact mode={mode} />} />
            <Route path="/userconfig" element={<UserConfiguration mode={mode} />} />
            <Route path="/calci" element={<Calci />} />
            {/* <Route path='News' element={<News mode={mode} />} /> */}
            <Route path="/weather" element={<WeatherApp category="weather" />} />
            <Route path="/anime" element={<Anime />} />
            <Route path='/img' element={<Images />} />
          </Routes>
          <Login trigger={trigger} setTrigger={setTrigger} />
          <Footer mode={mode} active={active} clickHandler={clickHandler} />
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
