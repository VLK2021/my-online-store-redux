import React from 'react';

import './FormStyle.css';


const Form = () => {

    const form = (e) => {
        e.preventDefault();
    }

    const change = (e) => {
        if(e.target.checked) {
            console.log(e.target.name)
        } else {
            console.log('godby');
        }

    }

    const submit = (e) => {

    }


    return (
        <div >
            <form className={'form'} onSubmit={form}>
            <h3>Categories</h3>
            <label><input className="checkbox" type="checkbox" name={'Monitors'} onChange={change}/> Monitors</label>
            <label><input className="checkbox" type="checkbox" name={'Laptops'} onChange={change}/> Laptops</label>
            <label><input className="checkbox" type="checkbox" name={'Video cards'} onChange={change}/> Video cards</label>
            <label><input className="checkbox" type="checkbox"/> Gaming keyboards</label>
            <label><input className="checkbox" type="checkbox"/> Computer mouse</label>
            <label><input className="checkbox" type="checkbox"/> SSD</label>
            <label><input className="checkbox" type="checkbox"/> Sound cards</label>
            <label><input className="checkbox" type="checkbox"/> RAM</label>

            <h3>Brands</h3>
            <label><input className="checkbox" type="checkbox"/> Asus</label>
            <label><input className="checkbox" type="checkbox"/> Acer</label>
            <label><input className="checkbox" type="checkbox"/> Apple</label>
            <label><input className="checkbox" type="checkbox"/> Dell</label>
            <label><input className="checkbox" type="checkbox"/> Dynamode</label>
            <label><input className="checkbox" type="checkbox"/> Gigabyte</label>
            <label><input className="checkbox" type="checkbox"/> Kingston</label>
            <label><input className="checkbox" type="checkbox"/> Lenovo</label>
            <label><input className="checkbox" type="checkbox"/> Logitech</label>
            <label><input className="checkbox" type="checkbox"/> MSI</label>
            <label><input className="checkbox" type="checkbox"/> BenQ</label>
            <label><input className="checkbox" type="checkbox"/> A4Tech</label>



            <button className={'form-btn'} onClick={submit}>clear all filters</button>
            </form>
        </div>
    );
};

export default Form;