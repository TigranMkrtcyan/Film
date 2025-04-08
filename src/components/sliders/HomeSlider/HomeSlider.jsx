import style from './HomeSlider.module.css'


const HomeSlider = ({ el }) => {

    return (
        <div>
            <h1 className={style.h1}>{el.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w400/${el.poster_path}`} className={style.poster} alt="" />
        </div>
    )
}

export default HomeSlider