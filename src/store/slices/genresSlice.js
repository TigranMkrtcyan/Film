import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FilmAPI from "../../api/api";

export const getGenresThunk = createAsyncThunk(
    "getGenres",
    async (language) => {
        const res = await FilmAPI.getGenres(language)

        return res.data.genres
    }
)

export const getGenresMoviesThunk = createAsyncThunk(
    "getGenresMoviesThunk",
    async ({language,genreId,page}) => {
        const res = await FilmAPI.getGenersMovies(language,genreId,page)
        
        return res.data.results
    }
)

const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: [],
        genreMovies : [],
        loading : false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getGenresThunk.pending, (state) => {
            state.loading = true 
        })
        builder.addCase(getGenresThunk.fulfilled, (state,action) => {
            state.loading = false 
            state.genres = action.payload
        })
        builder.addCase(getGenresMoviesThunk.pending, (state) => {
            state.loading = true 
        })
        builder.addCase(getGenresMoviesThunk.fulfilled, (state,action) => {
            state.loading = false 
            if (action.payload.page === 1) {
                state.genreMovies = action.payload;
            } else {
                state.genreMovies = [...state.genreMovies, ...action.payload];
            }
        })
    }
})

export default genresSlice.reducer