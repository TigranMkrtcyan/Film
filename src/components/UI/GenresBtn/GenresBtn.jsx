import style from './GenresBtn.module.css'

const GenresBtn = ({gener}) => {
  return (
    <button className={style.btn}>{gener.name}</button>
  )
}

export default GenresBtn