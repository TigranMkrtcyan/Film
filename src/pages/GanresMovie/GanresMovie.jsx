import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import style from './GanresMovie.module.css'
import { getGenresMoviesThunk } from '../../store/slices/genresSlice'

const GanresMovie = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.global)
    const { genreMovies, loading } = useSelector(state => state.genres)

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getGenresMoviesThunk({
            language,
            genreId: id,
            page: page
        }))
    }, [id, language, page, dispatch])

    useEffect(() => {
        function handleScroll() {
            if (loading) return; 
            
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;
            
            if (documentHeight - (windowHeight + scrollPosition) < 200) {
                setPage(prevPage => prevPage + 1);
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]); 
    
    useEffect(() => {
        setPage(1);
    }, [id, language]);
    
    return (
        <>
        <div className={style.movies}>
            {
                genreMovies.map((el) => {
                    return(
                        <div key={el.poster_path} className='ganre'>
                            <img 
                                src={el.poster_path ? `https://image.tmdb.org/t/p/w400/${el.poster_path}` : '/no-poster.jpg'} 
                                alt={el.title || "Movie poster"} 
                            />
                            <h3 className={style.h3}>{el.title}</h3>
                        </div>
                    )})
            }
        </div>
        </>
    )
}

export default GanresMovie