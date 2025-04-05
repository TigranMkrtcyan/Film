import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import FilmAPI from "../../api/api";


export const getMovieThunk = createAsyncThunk(
    "getMovieThunk",
    async ({language,pageCount}) => {
        const res = await FilmAPI.getMovies(language,pageCount)
        return res.data
    }
)

const movieSilce = createSlice({
    name : "movieSilce",
    initialState : {
        movies : [],
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(getMovieThunk.pending , (state,action) => {
        })
        builder.addCase(getMovieThunk.fulfilled , (state,action) => {
            state.movies = action.payload.results  
        })
    }
})

export default movieSilce.reducer