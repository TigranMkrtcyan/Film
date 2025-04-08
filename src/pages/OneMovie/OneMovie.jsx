import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneMovieThunk } from '../../store/slices/movieSlice'

import style from './OneMovie.module.css'

const OneMovie = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { movie, loading } = useSelector(state => state.movie)
    const { language } = useSelector(state => state.global)

    useEffect(() => {
        dispatch(getOneMovieThunk({ language, id }))
    }, [id, language, dispatch])

    if (loading) {
        return <div className='loader'></div>
    }

    return (
        <div className={style.movie}>
            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} className={style.poster} alt="" />
            <div className={style.info} >
                <h1 className={style.title}>{movie.title}</h1>
                <div className={style.texts}>
                    <h2 className={style.text}><span>Release -</span> {movie.release_date}</h2>
                    <h2 className={style.text}><span>Popularity -</span> {movie.popularity}</h2>
                    <h2 className={style.text}><span>Revenue -</span> {movie.revenue } $</h2>
                    <h2 className={style.text}><span>Vote Average -</span>  {movie.vote_average}</h2>
                    <h2 className={style.text}><span>Vote Count -</span> {movie.vote_count}</h2>
                </div>
            </div>
        </div>
    )
}

export default OneMovie