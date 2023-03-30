import React, { useCallback } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setFilters, filterSelector } from '../redux/slice/filterSlice';
import { fetchPizzas, pizzaSelector } from '../redux/slice/pizzasSlice';
import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

function Home() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const { categoryId, sort, carrentPage, searchValue } = useSelector(filterSelector);
    const {pizzas, loadingStatus} = useSelector(pizzaSelector);
    const dispatch = useDispatch();
    // hook router for adding search string to URL
    const navigate = useNavigate();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const requestPizzas = () => {
           const category = categoryId > 0 ? `category=${categoryId}` : '';
           const sortBy = sort.sortProperty.replace('-', '');
           const order = sort.sortProperty.includes('-');
           const search = searchValue ? `&search=${searchValue}` : '';
           dispatch(fetchPizzas({
            category,
            sortBy,
            order,
            search,
            carrentPage}));            
    }

    React.useEffect(() => {
        if (isMounted.current) {
        // переделывает обьект в строку
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                carrentPage });
        // вшивает строку в ссылку
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, carrentPage]);

    // in first render  check URL-params & save in store, if it's exist:
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
             // took obj from sortProperty arr (becouse payload for state.sort should be the obj)
             const sortParams = sortList.find((obj) => obj.sortProperty === params.sortProperty);
            (Number(params.categoryId) === 0) ? isSearch.current=false : isSearch.current = true;
            dispatch(setFilters({ ...params, sortParams }));   
        }
    }, []);

    //  pizzas request
    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            requestPizzas();
        }
        isSearch.current = false;

    },[categoryId, sort.sortProperty, searchValue, carrentPage]);

    const skeletons =  [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    const pizzasBlock = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
     
    return (
        <div className="container">
            <div onClick={()=>setOpenMenu(!openMenu)}
                 className={openMenu ?'content__icon-menuX' : 'content__icon-menu'}>
                <span></span>
            </div>
            <div className="content__top">
                <Categories openMenu={openMenu}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
               (loadingStatus === "error" 
                ) ? (
                <div className='content__error-info'>
                    <h2>Произошла ошибка 😟</h2>
                    <p> Не удалось получить пиццы, попробуйте повторить попытку позже</p>
                </div> 
                ) : ( 
                <div className="content__items">
                    {(loadingStatus === 'loading') ? skeletons : pizzasBlock }
                </div>)
            }
            <Pagination/>
        </div>
    )
}

export default Home;
