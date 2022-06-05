import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


import {getAllProducts} from "../../store";
import {getSearchProducts} from "../../store";
import './PaginationStyle.css';


const Pagination = ({totalProductsPage, currentPage, pageChange}) => {

    const dispatch = useDispatch();
    const {word} = useParams();


    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(6);


    const pages = [];


    const onAddNextPages = () => {
        if (endPage + 6 <= totalProductsPage) {
            setStartPage(startPage + 6);
            setEndPage(endPage + 6);
        }
    };

    const onRemovePages = () => {
        if (endPage - 6 > 0) {
            setStartPage(startPage - 6);
            setEndPage(endPage - 6);
        }
    };


    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChange = (page) => {
        if (pageChange === getAllProducts) {
            dispatch(pageChange(page));
        }
        // if (pageChange === getSearchProducts) {
        //     dispatch(getSearchProducts(word, page));
        // }
    };


    return (
        <div className={'pagination'}>
            <button onClick={onRemovePages} className="pagination-btn">Prev</button>
            {
                pages.map(item => <div key={item}
                                       className={`pagination-pages ${currentPage === item && 'active-page'}`}
                                       onClick={() => {
                                           onPageChange(item);
                                       }}>{item}</div>)
            }
            <button onClick={onAddNextPages} className="pagination-btn">Next</button>
        </div>
    );
};

export default Pagination;