import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieThunk } from '../../store/slices/movieSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import style from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.movie)
    const { language } = useSelector(state => state.global)

    useEffect(() => {
        dispatch(getMovieThunk({
            language,
            pageCount: 1
        }))
    }, [])

    return (
        <div className={style.home}>
            <h1>New movies</h1>
            <hr />
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation]}
            >
                {
                    movies.map((el) => {
                        return <SwiperSlide>
                            <img src={`https://image.tmdb.org/t/p/w400/${el.backdrop_path}`} alt="" />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Home