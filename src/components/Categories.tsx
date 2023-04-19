import React from 'react';
import { useWhyDidYouUpdate } from 'ahooks';

type CategoriesProps = {
  openMenu: boolean;
  categoryId: number
  onChangeCategory: (id:number) => void;
}

 //  масив категорий определяет название по цифре из бекэнда
const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые'] ;

export const Categories: React.FC <CategoriesProps> = React.memo(({ openMenu,categoryId,onChangeCategory }) => {
  
  useWhyDidYouUpdate('Categories', { openMenu,categoryId,  onChangeCategory });
         
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
})
