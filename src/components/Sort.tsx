import React, {useRef ,useCallback } from 'react';
import { setSort } from '../redux/filter/slice';
import { SortType } from '../redux/filter/type'
import { useAppDispatch } from '../redux/store';
import arrowTopSvg from '../assets/img/arrow-top.svg'


type SortProps = {
  sort: SortType;
}

type PopupClick = MouseEvent & {
  composedPath(): Node[];
}

// sort list
export const sortList: SortType[] = [
  { name: 'популярности(DESC)', sortProperty: 'rating' },
  { name: 'популярности(ASC)', sortProperty: '-rating' },
  { name: 'цене(DESC)', sortProperty: 'price' },
  { name: 'цене(ASC)', sortProperty: '-price' },
  { name: 'алфавиту(DESC)', sortProperty: 'title' },
  { name: 'алфавиту(ASC)', sortProperty: '-title' },
]

export const Sort: React.FC<SortProps> = React.memo(({sort}) => {
  
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const onClickListItem = (obj:SortType) => {
    dispatch(setSort(obj))
    setOpen(false);
  }
  // saying we can add to sortRef null or html 
  const sortRef = useRef<HTMLDivElement>(null);

  const handleClickOutsite = useCallback((event: MouseEvent)=>{ 
   const _event = event as PopupClick; //23 
   // покажет весь путь куда был клик 
     if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
       setOpen(false);
     } 
  },[])
   
  React.useEffect(() => {
    document.body.addEventListener('click', handleClickOutsite);
    return () => {
      document.body.removeEventListener('click', handleClickOutsite);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
      <img src={arrowTopSvg} alt="arrowTopSvg" />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>
          {sort.name}
        </span>
      </div>
      {
      open &&
        (<div className="sort__popup"  >
          <ul>
            {sortList.map((obj) =>
              <li
                key={obj.name}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            )}
          </ul>
        </div>
        )
      }
    </div>
  )
})
