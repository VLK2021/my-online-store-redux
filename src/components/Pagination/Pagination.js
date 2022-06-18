import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


import {getAllProducts} from "../../store";
import {getSearchProducts} from "../../store";
import './PaginationStyle.css';


const Pagination = ({pageNumber}) => {
    console.log(pageNumber);

    const dispatch = useDispatch();
    const {word} = useParams();

    const totalProductsPages = 12;


    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(6);

    const pages = [];

    const onAddNextPages = () => {
        if (endPage + 6 <= totalProductsPages) {
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
        if (getAllProducts) {
            console.log(page);
            dispatch(getAllProducts(page));
        }

        if (getSearchProducts) {
            dispatch(getSearchProducts({word, page}));
        }
    };

    return (
        <div className={'pagination'}>
            <button onClick={onRemovePages} className="pagination-btn">Prev</button>
            {
                pages.map(item => <div key={item}
                                       className={`pagination-pages ${item === pageNumber && 'active-page'}`}
                                       // className={`pagination-pages`}
                                       onClick={() => {
                                           onPageChange(item);
                                       }}>{item}</div>)
            }
            <button onClick={onAddNextPages} className="pagination-btn">Next</button>
        </div>
    );
};

export default Pagination;