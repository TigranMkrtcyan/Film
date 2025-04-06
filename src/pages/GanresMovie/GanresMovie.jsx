import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import style from './GanresMovie.module.css'
import { getGenresMoviesThunk } from '../../store/slices/genresSlice'

const GanresMovie = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.global)
    const { genreMovies } = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getGenresMoviesThunk({
            language,
            genreId: id
        }))
    }, [id,language])

    return (
        <>
        <div className={style.movies} >
            {
                genreMovies.map((el) => {
                    return(
                        <div key={el.id} className='ganre'>
                        <img src={`https://image.tmdb.org/t/p/w400/${el.backdrop_path}`} alt="" />
                        <h3 className={style.h3}>{el.title}</h3>
                    </div>
                )})
            }
        </div>
        </>
    )
}

export default GanresMovie