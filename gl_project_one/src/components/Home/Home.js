import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
import {useDispatch} from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const movieText = "Harry";
    

    const fetchMovie = async() => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((error)=>{
        console.log(error)
      })
      console.log(response.data)
      dispatch(addMovies(response.data))
    }

    fetchMovie()
  }
  ,[])


  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home
