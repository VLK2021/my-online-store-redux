import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import {getAllProducts} from "../../store";
import {getSearchProducts} from "../../store";
import './PaginationStyle.css';


const Pagination = ({totalProductsPages}) => {
    const dispatch = useDispatch();
    const {word} = useParams();

    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(totalProductsPages);

    const [page, setPage] = useState(1);

    const pages = [];

    // const onAddNextPages = () => {
    //     if (endPage + 6 <= totalProductsPages) {
    //         setStartPage(startPage + 6);
    //         setEndPage(endPage + 6);
    //     }
    // };

    // const onRemovePages = () => {
    //     if (endPage - 6 > 0) {
    //         setStartPage(startPage - 6);
    //         setEndPage(endPage - 6);
    //     }
    // };

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChange = (page) => {
        if (getAllProducts) {
            dispatch(getAllProducts(page));
            setPage(page);
        }

        if (getSearchProducts) {
            dispatch(getSearchProducts({word, page}));
            setPage(page);
        }
    };

    const onArrowPageChange = (page) => {
        if (getAllProducts) {
            dispatch(getAllProducts(page));
            setPage(page);
        }

        if (getSearchProducts) {
            dispatch(getSearchProducts({word, page}));
            setPage(page);
        }
    };

    return (
        <div className={'pagination'}>
            <button className={'pagination-btn'} onClick={() => {
                onArrowPageChange(page - 1)
            }}>
                <AiOutlineLeft
                    className={'AiOutlineLeft'}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>
            {/*<button onClick={onRemovePages} className="pagination-btn">Prev</button>*/}
            {
                pages.map(item =>
                    <div key={item}
                         className={`pagination-pages ${page === item && 'active-page'}`}
                         onClick={() => {
                             onPageChange(item);
                         }}>{item}
                    </div>)
            }
            {/*<button onClick={onAddNextPages} className="pagination-btn">Next</button>*/}

            <button className={'pagination-btn'} onClick={() => {
                onArrowPageChange(page + 1)
            }}>
                <AiOutlineRight
                    className={'AiOutlineLeft'}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>
        </div>
    );
};
export default Pagination;