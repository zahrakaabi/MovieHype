/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Route, Routes } from "react-router-dom";

// UI Local Components
import Layout from '../layout/layout';
import { Favorites, Home } from '../pages';

// Context
import { FavoritesProvider, MoviesProvider, SearchProvider } from "../context";

// Styles
import './App.scss';




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
    <SearchProvider>
      <MoviesProvider>
        <FavoritesProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites /> } />
              {/* <Route path="/admin"><Admin movies={movies} searchInput={searchInput}/></Route> */}
            </Routes>
          </Layout>
        </FavoritesProvider>
      </MoviesProvider>
    </SearchProvider>
  );
}

export default App;