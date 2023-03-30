import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { setCarrentPage} from '../../redux/slice/filterSlice';
import styles from './Pagination.module.scss'

function Pagination() {
    
    const dispatch = useDispatch();
    const onChangePage = (number) => dispatch(setCarrentPage(number));

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}

            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination;
