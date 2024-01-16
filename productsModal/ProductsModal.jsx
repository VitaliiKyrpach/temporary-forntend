import { useState } from 'react';
import svg from '../../img/sprite/symbol-defs.svg';
import css from './productsModal.module.css';
export const ProductsModal = ({ isOpen, onClose, data }) => {
  const [inputCals, setInputCals] = useState(0)
  console.log(inputCals)
  if (!isOpen) return null;
  const {calories, title, weight, _id} = data
  console.log(data)
  const handleEscapeKey = event => {
    if (event.code === 'Escape') {
      console.log('Escape');
      onClose();
      setInputCals(0);
      return document.removeEventListener('keydown', handleEscapeKey);
    }
  };
  isOpen && document.addEventListener('keydown', handleEscapeKey);
  const countCalories = inputCals * calories / 100;
  const handleClose = e => {
    if (
      e.target.dataset.type === 'backdrop' ||
      e.target.dataset.type === 'close-modal'
    ) {
      onClose();
      setInputCals(0);
    }
  };
  const handleChange = e =>{
    console.log(e.target.value)
    setInputCals(e.target.value)
  }

  return (
    <div className={css.backdrop} onClick={handleClose} data-type="backdrop">
      <div className={css.modal}>
        <button
          className={css.modalCloseBtn}
          type="button"
          onClick={handleClose}
          data-type="close-modal"
        >
          <svg className={css.svgclose}>
            <use href={`${svg}#icon-close-modal`}></use>
          </svg>
        </button>
        <input type="text" className={css.input} value={title} disabled/>
        <div className={css.inputWrapper}>
        <input type="number" className={`${css.input} ${css.count}`} onChange={handleChange} required/>
        <p className={css.grams}>grams</p>
        </div>
        <p className={css.calories}>Calories: <span className={css.count}>{Math.floor(countCalories)}</span></p>
        <div className={css.btnWrapper}>
          <button type='button' className={css.btnAdd}>Add to diary</button>
          <button type='button' className={css.btnCansel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
