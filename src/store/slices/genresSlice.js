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
    async ({language,genreId}) => {
        const res = await FilmAPI.getGenersMovies(language,genreId)
        
        return res.data.results
    }
)

const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: [],
        loading: false,
        genreMovies : []
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
            state.genreMovies = action.payload
        })
    }
})

export default genresSlice.reducer