import React from 'react';
import { Link } from "react-router-dom";
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1>
                Ничего не найдено :(
            </h1>
            <p>К сожалению дання страница отсутствует в нашем магазине</p>
            <Link to='/'>
            <h2>Click to main page </h2>
            </Link>
        </div>
    )
}
export default NotFoundBlock;