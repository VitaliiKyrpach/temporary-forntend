import css from './ProductsTable.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import sprite from '../../../img/sprite/symbol-defs.svg';

import { deleteProductDiary } from '../../../redux/diary/diaryOperations';

import { useDispatch, useSelector } from 'react-redux';

import { selectDiaryProducts } from '../../../redux/diary/diarySelectors';

const ProductsTable = () => {
  const productsFromRedux = useSelector(selectDiaryProducts);
  const testArr = useSelector(state => state.diary);
  console.log(productsFromRedux);
  console.log(testArr);

  const dispatch = useDispatch();

  const deleteProduct = _id => {
    dispatch(deleteProductDiary(_id));
  };

  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };
  return (
    <ul className={css.diaryList}>
      {productsFromRedux.map(
        // тут в деструктуризації прописати змінні як у відповіді з бекенда
        ({ _id, title, category, calories, amount, recommended }) => {
          return (
            <li key={nanoid()} className={css.diaryItem}>
              <table className={css.table}>
                <tbody className={css.bodyTable}>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Title</th>
                    <td className={css.nameValue}>{capitalizedWord(title)}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Category</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(category)}
                    </td>
                  </tr>
                </tbody>
                <tbody className={css.elementCont}>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Calories</th>
                    <td className={css.nameValue}>{calories}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Weight</th>
                    <td className={css.nameValue}>{amount}</td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={css.nameCateg}>Recommend</th>
                    <td className={css.nameValue}>
                      <div className={`${css.recommendCont}`}>
                        <span
                          className={
                            recommended
                              ? `${css.productRecommend}`
                              : `${css.productNotRecommend}`
                          }
                        ></span>
                        {recommended ? 'Yes' : 'No'}
                      </div>
                    </td>
                  </tr>
                  <tr className={css.elem}>
                    <th className={`${css.nameCateg} ${css.nameTrash}`}>
                      Trash
                    </th>
                    <td onClick={() => deleteProduct(_id)}>
                      <svg className={css.iconTresh} width="98px" height="35px">
                        <use href={`${sprite}#icon-trash`}></use>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        }
      )}
    </ul>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;
