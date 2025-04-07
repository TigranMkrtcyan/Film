import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenresMoviesThunk, getGenresThunk } from '../../store/slices/genresSlice'
import { FaFilm } from "react-icons/fa";
import { changeLng } from '../../store/slices/globalSlice';

import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.genres)
    const { language } = useSelector(state => state.global)

    useEffect(() => {
        dispatch(getGenresThunk(language))
    }, [language])

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
                <input type="search" name="" className={style.inp} placeholder='Search' />
                <select name="language" onChange={(e) => dispatch(changeLng(e.target.value))}>
                    <option value="en-Us">EN</option>
                    <option value="ru-RU">RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header