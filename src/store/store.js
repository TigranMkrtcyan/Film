import { configureStore } from "@reduxjs/toolkit";
import genresSlice from './slices/genresSlice'
import globalSlice from './slices/globalSlice' 
import movieSilce from './slices/movieSlice' 

const store = configureStore({
    reducer : {
        genres : genresSlice,
        global : globalSlice,
        movie : movieSilce
    }
})

export default store