import style from './HomeSlider.module.css'


const HomeSlider = ({el}) => {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w400/${el.poster_path}`} alt="" />
            <hr />
            <h2 className={style.h2}>{el.title}</h2>
        </>
    )
}

export default HomeSlider