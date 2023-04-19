import {FC} from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';

import {  filterSelector} from '../../redux/filter/selectors';
import { setCarrentPage} from '../../redux/filter/slice';
import styles from './Pagination.module.scss'


export const Pagination: FC = () => {
    
    const {carrentPage} = useSelector(filterSelector);
    const dispatch = useAppDispatch();
    const onChangePage = (number:number) => dispatch(setCarrentPage(number));

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={carrentPage - 1}
        />
    )
}


