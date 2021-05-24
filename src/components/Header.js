import React from "react";


export default function Header() {
    return (
        <>
            <header className='header'>
                <h3>Our nice shop!</h3>
                <div className='items'>
                    <h3>cart: {0}</h3>
                    <h3>wishList: {0}</h3>
                </div>
            </header>
            <hr/>
        </>
    );
}