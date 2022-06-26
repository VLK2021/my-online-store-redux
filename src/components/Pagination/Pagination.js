import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
// import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

import {getAllProducts} from "../../store";
import {getSearchProducts} from "../../store";
import './PaginationStyle.css';


const Pagination = ({totalProductsInArr}) => {
    const endPagesFinal = Math.ceil(totalProductsInArr/9);
    console.log(totalProductsInArr);

    const dispatch = useDispatch();
    const {word} = useParams();


    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(0);
    const [page, setPage] = useState(1);

    const pages = [];

   useEffect(()=> {
       setEndPage(endPagesFinal);
   }, [endPagesFinal]);



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

    return (
        <div className={'pagination'}>
            <button className={'pagination-btn'} onClick={() => {
                onPageChange(page - 1);
                // if(page - 1 <= totalProductsPages/2) {
                //     onRemovePages();
                // }
            }}>
                <AiOutlineLeft
                    className={'AiOutline'}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>

            {/*<button onClick={onRemovePages} className="pagination-btn doubleArrow">*/}
            {/*    <AiOutlineDoubleLeft*/}
            {/*    className={'AiOutlineDouble'}*/}
            {/*    size={25}*/}
            {/*    fill={'#000'}*/}
            {/*    />*/}
            {/*</button>*/}

            {
                pages.map(item =>
                    <div key={item}
                         className={`pagination-pages ${page === item && 'active-page'}`}
                         onClick={() => {
                             onPageChange(item);
                         }}>{item}
                    </div>)
            }

            {/*<button onClick={onAddNextPages} className="pagination-btn doubleArrow">*/}
            {/*   <AiOutlineDoubleRight*/}
            {/*       className={'AiOutlineDouble'}*/}
            {/*       size={25}*/}
            {/*       fill={'#000'}*/}
            {/*   />*/}
            {/*</button>*/}

            <button className={'pagination-btn'} onClick={() => {
                onPageChange(page + 1);
                // if(page + 1 > totalProductsPages/2){
                //     onAddNextPages();
                // }
            }}>
                <AiOutlineRight
                    className={'AiOutline'}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>
        </div>
    );
};
export default Pagination;