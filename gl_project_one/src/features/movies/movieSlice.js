import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

// Fetching data for Movies
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovie",async()=>{
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);

    return response.data;
})



// Fetching data for Shows
export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows",async()=>{
    const showText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${showText}&type=series`);
    return response.data;
})






//Create InitialState
const initialState = {
    movies:{},
    shows:{}
}


//Creating Slice for movie

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending] : () =>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
            console.log("Fetched Movies Successfully !!!");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log("Rejected ")
        },
        [fetchAsyncShows.fulfilled] : (state,{payload}) => {
            console.log("Fetching Shows Successfully !!!");
            return {...state,shows:payload}
        }
    }
})







export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export default movieSlice.reducer;