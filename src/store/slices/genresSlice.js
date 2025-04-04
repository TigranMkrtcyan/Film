import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FilmAPI from "../../api/api";

export const getGenresThunk = createAsyncThunk(
    "getGenres",
    async (language) => {
        const res = await FilmAPI.getGenres(language)

        return res.data.genres
    }
)

const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: [],
        loading: false
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
    }
})

export default genresSlice.reducer