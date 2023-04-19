import React, { useCallback } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

import {  filterSelector} from '../redux/filter/selectors';
import { setFilters, setCategoryId} from '../redux/filter/slice';
import { Status } from '../redux/pizza/type';
import { pizzaSelector } from "../redux/pizza/selectors";
import { fetchPizzas } from "../redux/pizza/asyncActions";

import {
    Categories,
    Sort,
    PizzaBlock,
    Skeleton,
    Pagination,
    sortList,   
} from '../components'


const Home: React.FC = () => {

    const [openMenu, setOpenMenu] = React.useState(false);
    const { categoryId, sort, carrentPage, searchValue } = useSelector(filterSelector);
    const {pizzas, loadingStatus} = useSelector(pizzaSelector);
    const dispatch = useAppDispatch();
    // hook router for adding search string to URL
    const navigate = useNavigate();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const onChangeCategory = useCallback((id:number) => dispatch(setCategoryId(id)),[]);
    
    const requestPizzas = () => {
           const category = categoryId > 0 ? `category=${categoryId}` : '';
           const sortBy = sort.sortProperty.replace('-', '');
           const order = sort.sortProperty.includes('-')? 'asc' : 'desc';
           const search = searchValue ? `&search=${searchValue}` : '';
           dispatch(
            fetchPizzas({
            category,
            sortBy,
            order,
            search,
            carrentPage: String(carrentPage)
        }));            
    }

    React.useEffect(() => {
        if (isMounted.current) {
        // create string from object
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                carrentPage });
        // added string to URL
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
            (Number(params.categoryId) === 0) ? isSearch.current=false :
             isSearch.current = true;
            dispatch(setFilters({
                categoryId: Number(params.categoryId),
                sort: sortParams? sortParams : sortList[0],
                carrentPage: Number(params.carrentPage)
            }));   
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
    const pizzasBlock = pizzas.filter((obj) =>{
        return searchValue? obj.title.toLocaleLowerCase().includes(searchValue.toLowerCase()):obj
       })
       .map((obj:any) => <PizzaBlock key={obj.id} {...obj} />)
                       
    return (
        <div className="container">
            <div onClick={()=>setOpenMenu(!openMenu)}
                 className={openMenu ?'content__icon-menuX' : 'content__icon-menu'}>
                <span></span>
            </div>
            <div className="content__top">
                <Categories
                 openMenu={openMenu} 
                 categoryId={categoryId}
                 onChangeCategory={onChangeCategory}/>
                <Sort sort={sort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
               (loadingStatus === Status.ERROR 
                ) ? (
                <div className='content__error-info'>
                    <h2>Произошла ошибка 😟</h2>
                    <p> Не удалось получить пиццы, попробуйте повторить попытку позже</p>
                </div> 
                ) : ( 
                <div className="content__items">
                    {(loadingStatus === Status.LOADING) ? skeletons : pizzasBlock }
                </div>)
            }
            <Pagination/>
        </div>
    )
}

export default Home;
