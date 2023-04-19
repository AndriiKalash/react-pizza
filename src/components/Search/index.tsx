import React from 'react';
import debounce from 'lodash.debounce';
import searchIcon from "../../assets/img/search.svg";
import removeBtnIcon from "../../assets/img/btn-remove.svg";
import styles from './Search.module.scss';
import { setSearchValue } from "../../redux/filter/slice";
import { useAppDispatch } from '../../redux/store';



export const Search: React.FC = () => {

    // новый локальный стейт для мгновенног ввода в инпут, так как на searchValue я вешаю задержку 
    const [value, setValue] = React.useState('');
    const dispatch = useAppDispatch();
    const inputRef = React.useRef<HTMLInputElement>(null);

    // ф-я для очистки input и фокуса на нем после очистки
    const onClickClear = () => {
        setValue('');
        dispatch(setSearchValue(''));
        inputRef.current?.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 800),
        [],
    )
    
    // функция для того чтоб из инпута вытащить данны и передать их в стейт
    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.search}>
            <img className={styles.searchBtn} src={searchIcon} alt="search" />
            {value && <img onClick={onClickClear} 
            className={styles.removeBtn} src={removeBtnIcon} alt="cleare" />}
            <input
                ref={inputRef}
                onChange={onChangeInput}
                value={value}
                className={styles.root} type="text"
                name="" id="" placeholder='Поиск пицы ...'
            />
        </div>
    )
}


