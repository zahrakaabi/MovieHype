/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Route, Routes } from "react-router-dom";

// UI Local Components
import Layout from '../layout/layout';
import { Home } from '../pages';

// Context
import { MoviesProvider } from "../context";

// Styles
import './App.scss';




// import Menu from '../components/Navbar'
// import FilteredMovies from '../components/FilteredMovies'
// import {FilteredSeries} from '../components/FilteredSeries'
// import Favorite from '../components/Favorite'
// import {WatchedList} from '../components/WatchedList'
//import Footer from '../components/Footer'
import { useState, useEffect} from 'react'
//import {Admin} from '../components/Admin'
import axios from 'axios';


/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
const App = () => {
/* ---------------------------------- HOOKS --------------------------------- */

  //calling the json file using fetch==================================
  // const [movies,setMovies] = useState([])
  // useEffect(()=>{
  //   fetch('Movies.json')
  //   .then(response => response.json())
  //   .then(movies=>setMovies(movies))
  // })

  //calling the json file using axios===================================



   //value of the search input=================================================
   const [searchInput, setSearchInput] = useState("")
   const getSearchInput = (event) =>{
      setSearchInput(event.target.value)
   }

  //increment the wishlist==============================================
  const [favorite, setFavorite] = useState(0)
  const getFavorite = () => {
    setFavorite(favoriteValue.length+1)
  }

  //add to the wishlist=================================================
  const [favoriteValue, setFavoriteValue] = useState([])
  const getFavoriteValue = (element) =>{
    //favoriteValue.push(element)
    //if (!favoriteValue.some(alreadyFavorite => alreadyFavorite.Title == element.id)){
      setFavoriteValue(favoriteValue => [...favoriteValue, element])
      getFavorite()
    //}
  }


  //add to watched list=================================================
  const[watchedList, setWatchedList] = useState([])
  const getWatchedList = (element) => {
    setWatchedList(watchedList => [...watchedList, element])
  }

  //remove from the watched list========================================
  const removeFromWatchedlist = (element) => {
    let index = watchedList.indexOf(element)
    if (index !== -1) {
      watchedList.splice(index, 1);
      setFavoriteValue(watchedList)}
  }

  //remove from the wishlist============================================
  const removeFromWishlist = (element) => {
    let index = favoriteValue.indexOf(element)
    if (index !== -1) {
      favoriteValue.splice(index, 1);
      setFavoriteValue(favoriteValue)}
    //delete favoriteValue[index]
    setFavorite(favorite - 1)
  }

  //remove all from the wishlist========================================
  const removeAllWishlist = () => {
    setFavoriteValue([])
    setFavorite(0)
  }
  
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <MoviesProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          

          
          {/* <Menu favorite={favorite} getSearchInput={getSearchInput}/> */}
          {/* <Route exact path="/"><HomePage movies={movies} searchInput = {searchInput} getFavoriteValue={getFavoriteValue}  getWatchedList={getWatchedList}/></Route> */}
          {/* <Route path="/Movies"><FilteredMovies searchInput={searchInput} movies={movies} getFavoriteValue={getFavoriteValue}/></Route>
          <Route path="/Series"><FilteredSeries searchInput={searchInput} movies={movies} getFavoriteValue={getFavoriteValue}/></Route>
          <Route path="/WatchedList"><WatchedList searchInput={searchInput} watchedList={watchedList} removeFromWatchedlist={removeFromWatchedlist}/></Route>
          <Route path="/Favorite"><Favorite searchInput={searchInput} favoriteValue={favoriteValue} getFavoriteValue={getFavoriteValue} removeFromWishlist={removeFromWishlist} removeAllWishlist={removeAllWishlist}/></Route>
          <Route path="/admin"><Admin movies={movies} searchInput={searchInput}/></Route> */}
        </Routes>
      </Layout>
    </MoviesProvider>
  );
}

export default App;