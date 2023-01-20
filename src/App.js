import './App.css'
import Nav from "./components/Nav/Nav.jsx"
import Cards from './components/Cards/Cards.jsx'
import style from "./components/GlobalStyles/GlobalStyles.module.css"
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'



function App() {

  const [access, setAccess] = useState(false);
  const username = 'anthony@gmail.com'
  const password = "Antho01"
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  const [characters, setCharacters] = useState([])
  const location = useLocation()


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let actual = characters.find((e) => e.id === data.id);
          if (actual) {
            alert("This character already exist")
          }
          else {
            setCharacters((oldChars) => [data, ...oldChars])
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(characters => characters.id !== id)
    )
  }

  return (
    // <div className='App' style={{ padding: '25px' }}>
    <div className={style.body}>
      {location.pathname !== "/" && <div className={style.navBar}><Nav onSearch={onSearch} /></div>}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<div className={style.contenedor}><Cards onClose={onClose} characters={characters} /></div>} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>


  )
}

export default App
