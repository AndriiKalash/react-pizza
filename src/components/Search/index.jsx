import React from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from "../../redux/slice/filterSlice";

function Search() {

    // новый локальный стейт для мгновенног ввода в инпут, так как на searchValue я вешаю задержку 
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    // useRef для определения DOM элемнта input
    const inputRef = React.useRef();

    // ф-я для очистки input и фокуса на нем после очистки
    const onClickClear = () => {
        setValue('');
        dispatch(setSearchValue(''));
        inputRef.current.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 250),
        [],
    )
    
    // функция для того чтоб из инпута вытащить данны и передать их в стейт
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.search}>
            <img className={styles.searchBtn} src="img/search.svg" alt="search" />
            {value && <img onClick={onClickClear} className={styles.removeBtn} src="img/btn-remove.svg" alt="cleare" />}
            <input
                ref={inputRef}
                onChange={onChangeInput}
                value={value}
                className={styles.root} type="text" name="" id="" placeholder='Поиск пицы ...'
            />
        </div>
    )
}

export default Search
