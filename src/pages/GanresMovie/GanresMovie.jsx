import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGenresMoviesThunk } from '../../store/slices/genresSlice'


import style from './GanresMovie.module.css'
import Movies from '../../components/Movies/Movies'

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
            {loading ? <div className={style.loader}></div> :
                <div className={style.movies}>
                    {
                        genreMovies.map((el) => <Movies key={el.id} el={el} />)
                    }
                </div>}
        </>
    )
}

export default GanresMovie