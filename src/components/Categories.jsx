import React from 'react';

function Categories({ openMenu, value, onChangeCategory }) {

  //  масив категорий определяет название по цифре из бекэнда
  const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые'] ; 
                      
  return (
    <div className="categories">
        <ul className={openMenu ? "active" : ''}>
          {
          categories.map((categoryName, i) =>
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}>
              {categoryName}
            </li>)
          }
        </ul>
    </div>
  )
}

export default Categories;