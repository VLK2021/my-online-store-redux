import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import './FormStyle.css';
import {getSearchProducts} from "../../store/slices/search.slice";


const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const page = 1;


    const form = (e) => {
        e.preventDefault();
    }

    const change = (e) => {
        if (e.target.checked) {
            let word = e.target.name;
            navigate(`/search/${word}`)
            dispatch(getSearchProducts({word, page}))
        } else {
            navigate(`/`)
        }
    }

    const submit = (e) => {
        const box = document.getElementsByClassName('checkbo');
        for (let i = 0; i < box.length; i++) {
            if (box[i].checked) {
                box[i].checked = !box[i].checked;
            }
        }
        navigate(`/`);
    }


    return (
        <div>
            <form className={'form'} onSubmit={form}>
                <h3>Categories</h3>
                <label><input className="checkbo" type="checkbox" name={'Monitors'} onChange={change}/> Monitors</label>
                <label><input className="checkbo" type="checkbox" name={'Laptops'} onChange={change}/> Laptops</label>
                <label><input className="checkbo" type="checkbox" name={'Video_cards'} onChange={change}/> Video
                    cards</label>
                <label><input className="checkbo" type="checkbox" name={'Gaming_keyboards'} onChange={change}/> Gaming
                    keyboards</label>
                <label><input className="checkbo" type="checkbox" name={'Computer_mouse'} onChange={change}/> Computer
                    mouse</label>
                <label><input className="checkbo" type="checkbox" name={'SSD'} onChange={change}/> SSD</label>
                <label><input className="checkbo" type="checkbox" name={'Sound_cards'} onChange={change}/> Sound
                    cards</label>
                <label><input className="checkbo" type="checkbox" name={'RAM'} onChange={change}/> RAM</label>

                <h3>Brands</h3>
                <label><input className="checkbo" type="checkbox" name={'Asus'} onChange={change}/> Asus</label>
                <label><input className="checkbo" type="checkbox" name={'Acer'} onChange={change}/> Acer</label>
                <label><input className="checkbo" type="checkbox" name={'Apple'} onChange={change}/> Apple</label>
                <label><input className="checkbo" type="checkbox" name={'Dell'} onChange={change}/> Dell</label>
                <label><input className="checkbo" type="checkbox" name={'Dynamode'} onChange={change}/> Dynamode</label>
                <label><input className="checkbo" type="checkbox" name={'Gigabyte'} onChange={change}/> Gigabyte</label>
                <label><input className="checkbo" type="checkbox" name={'Kingston'} onChange={change}/> Kingston</label>
                <label><input className="checkbo" type="checkbox" name={'Lenovo'} onChange={change}/> Lenovo</label>
                <label><input className="checkbo" type="checkbox" name={'Logitech'} onChange={change}/> Logitech</label>
                <label><input className="checkbo" type="checkbox" name={'MSI'} onChange={change}/> MSI</label>
                <label><input className="checkbo" type="checkbox" name={'BenQ'} onChange={change}/> BenQ</label>
                <label><input className="checkbo" type="checkbox" name={'A4Tech'} onChange={change}/> A4Tech</label>

                <button className={'form-btn'} onClick={e => submit(e)}>clear all filters</button>
            </form>
        </div>
    );
};
export default Form;

