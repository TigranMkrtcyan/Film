import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import FilmAPI from "../../api/api";

export const getMovieThunk = createAsyncThunk(
    "getMovieThunk",
    async ({language,pageCount}) => {
        const res = await FilmAPI.getMovies(language,pageCount)
        
        return res.data
    }
)

export const getOneMovieThunk = createAsyncThunk(
    "getOneMovieThunk",
    async ({language,id}) => {
        const res = await FilmAPI.getOneMovie(language,id)
        
        return res.data
    }
)

export const getSearch = createAsyncThunk(
    "getSearch",
    async (text) => {
        const res = await FilmAPI.search(text)
        console.log(text);

        return res.data
    }
)

const movieSilce = createSlice({
    name : "movieSilce",
    initialState : {
        movies : [],
        movie : [],
        searchMovie : [],
        text : '',
        loading : false,
    },
    reducers : {
        changeText(state,action) {
            state.text = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getMovieThunk.pending , (state,action) => {
            state.loading = true 
        })
        builder.addCase(getMovieThunk.fulfilled , (state,action) => {
            state.loading = false 
            state.movies = action.payload.results  
        })
        builder.addCase(getOneMovieThunk.pending , (state) => {
            state.loading = true 
        })
        builder.addCase(getOneMovieThunk.fulfilled , (state,action) => {
            state.loading = false 
            state.movie = action.payload
        })
        builder.addCase(getSearch.pending , (state) => {
            state.loading = true 
        })
        builder.addCase(getSearch.fulfilled , (state,action) => {
            state.loading = false 
            state.searchMovie = action.payload.results
        })
    }
})

export const {changeText} = movieSilce.actions
export default movieSilce.reducer