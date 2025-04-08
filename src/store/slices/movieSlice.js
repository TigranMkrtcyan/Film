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

const movieSilce = createSlice({
    name : "movieSilce",
    initialState : {
        movies : [],
        loading : false,
        movie : []
    },
    reducers : {

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
    }
})

export default movieSilce.reducer