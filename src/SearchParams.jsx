{/*import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParams(props) {
    let [SearchParams,setSearchParams] = useSearchParams()
    let price = SearchParams.get('price_range')
    function update(e)
    {
        setSearchParams({price_range:e.target.value})
    }
    return (
        <div>
            Select Range : <input type="text" min={1000} max={10000} />
            <span>{price}</span>
            
        </div>
    );
}

export default SearchParams;
*/}



import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParams(props) {
    let [SearchParams,setSearchParams] = useSearchParams()
    let price = searchparams.get('price')
    let cat = searchparams.get('cat')
    let sub = searchparams.get('sub')

    function update()
    {
        setSearchParams({price:1000,cat:"Men",sub:'T-shirts'})
    }

    return (
        <div>
            <button onClick={update}>Set Parameters</button>
            <br/>
            Price : {price}
            <br/>
            Category : {cat}
            <br/>
            Sub_Cat : {sub}
            
        </div>
    );
}

export default SearchParams;