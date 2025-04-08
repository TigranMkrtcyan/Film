import style from './Movies.module.css'

import { IoEye } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Movies = ({ el }) => {

    return (
        <NavLink to={`/movie/${el.id}`} className={style.ganre}>
            <img src={`https://image.tmdb.org/t/p/w400/${el.poster_path}`} alt='' />
            <h1 className={style.h3}>{el.title}</h1>
            <div className={style.information}>
                <h3><IoEye /> {el.popularity}</h3>
                <h3><MdOutlineDateRange /> {el.release_date}</h3>
            </div>
        </NavLink>
    )
}

export default Movies