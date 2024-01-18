import css from './AddProductSuccess.module.css'
import img from '../../img/productSuccessFruit.png'
import svg from '../../img/sprite/symbol-defs.svg';
import { useSelector } from 'react-redux';
export const AddProductSuccess = () => {
  const diary = useSelector(state=> state.diary);
  console.log(diary)
  return <div className={css.wrapper}>
    <img src={img} alt="avokado" className={css.image}/>
    <h3 className={css.title}>Well done</h3>
    <p className={css.text}>Calories: <span className={css.count}>96</span></p>
    <button className={css.btnNext}>Next product</button>
    <button className={css.btnToDiary}>To the diary 
      <svg className={css.svgBtn}>
        <use href={`${svg}#icon-next-arrow-gray`}></use>
      </svg>
    </button>
  </div>;
};
