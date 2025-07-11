import React from 'react';
import { Link, Outlet  } from 'react-router-dom';

function Products(props) {
    return (
        <div>
            <h1>All Products Page</h1>
            <link to="/products/all">All</link>
            <br/>
            <link to="/products/men">Men</link>
            <br />
            <link to="/products/women">Women</link>
            <Outlet />
        </div>
    );
}

function All(props){
    return(
       <div>
            <h1>All Products</h1>
        </div>
    )
}
    
function Men(props){
    return(
       <div>
            <h1>Men Products</h1>
        </div>
    )
}

function Women(props){
    return(
       <div>
            <h1>Women Products</h1>
        </div>
    )
}

export {Products,All,Men,Women}