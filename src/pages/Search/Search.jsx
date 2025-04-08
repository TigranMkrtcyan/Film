import style from './Search.module.css'
import { useSelector } from 'react-redux'
import Movies from '../../components/Movies/Movies';

const Search = () => {
    const { searchMovie } = useSelector(state => state.movie)

    return (
        <div className= {style.search}>
            {
                searchMovie.map((el) => <Movies key={el.id} el={el} />)
            }
        </div>
    )
}

export default Search