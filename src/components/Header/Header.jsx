import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenresThunk } from '../../store/slices/genresSlice'
import GenresBtn from '../UI/GenresBtn/GenresBtn'
import { FaFilm } from "react-icons/fa";
import { changeLng } from '../../store/slices/globalSlice';

import style from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.genres)
    const { language } = useSelector(state => state.global)
    
    useEffect(() => {
        dispatch(getGenresThunk(language))
    }, [language])

    return (
        <header>
            <div className= {style.logo}>
                <FaFilm />
            </div>
            <nav>
                {
                    genres.map((gener) => {
                        return <GenresBtn key={gener.id} gener={gener} />
                    })
                }
            </nav>
            <div className= {style.search}>
                <input type="search" name="" className= {style.inp} placeholder='Search'/>
                <select name="language" onChange={(e) => dispatch(changeLng(e.target.value))}>
                    <option value="en-Us">EN</option>
                    <option value="ru-RU">RU</option>
                </select>
            </div>
        </header>
    )
}

export default Header