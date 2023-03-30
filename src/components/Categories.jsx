import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, filterSelector} from '../redux/slice/filterSlice';


function Categories({ openMenu }) {
  //  масив категорий определяет название по цифре из бекэнда
  const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые'] ; 
  const {categoryId} = useSelector(filterSelector);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => dispatch(setCategoryId(id));
         
  return (
    <div className="categories">
        <ul className={openMenu ? "active" : ''}>
          {
          categories.map((categoryName, i) =>(
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={categoryId === i ? 'active' : ''}>
              {categoryName}
            </li>)
          )
            
          }
        </ul>
    </div>
  )
}

export default Categories;