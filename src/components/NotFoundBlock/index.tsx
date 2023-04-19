import {FC} from 'react';
import { Link } from "react-router-dom";
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                Ничего не найдено :(
            </h1>
            <p>К сожалению дання страница отсутствует в нашем магазине</p>
            <Link to='/'>
            <button className="button button--outline button--add">
              <span >На главную</span>
            </button>
            </Link>
        </div>
    )
}
