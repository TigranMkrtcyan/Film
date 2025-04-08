import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenresThunk } from '../../store/slices/genresSlice'
import { FaFilm } from "react-icons/fa";
import { changeLng } from '../../store/slices/globalSlice';

import style from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { changeText, getSearch } from '../../store/slices/movieSlice';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { genres } = useSelector(state => state.genres)
    const { language } = useSelector(state => state.global)
    const { text } = useSelector(state => state.movie)

    useEffect(() => {
        dispatch(getGenresThunk(language))
    }, [language])

    const handleSearch = (text) => {
        dispatch(getSearch(text))
        navigate('/searchMovies')
    }
    
    return (
        <header>
            <NavLink to={`/`}>
                <div className={style.logo}>
                    <FaFilm />
                </div>
            </NavLink>
            <nav>
                {
                    genres.map((gener) => {
                        return <NavLink to={`/genresmovie/${gener.id}`} key={gener.id}>
                            <button className={style.btn} >{gener.name}</button>
                        </NavLink>
                    })
                }
            </nav>
            <div className={style.search}>
                <input type="search" className={style.inp} placeholder='Search' value={text} onChange={(e) => dispatch(changeText(e.target.value))} />
                <button className={style.searchbtn} onClick={() => handleSearch(text)}>Search </button>
                <select name="language" onChange={(e) => dispatch(changeLng(e.target.value))}>
                    <option value="en-Us">EN</option>
                    <option value="ru-RU">RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header