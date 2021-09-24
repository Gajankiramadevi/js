import React from 'react';
import Comp2 from './Comp2';
function Comp1(){
    let product_Name="Iphone 5s"
    let age=23;
    return(
        <div>
            <h1 style={{backgroundColor:'red'}}>component one: {product_Name}*****{age}</h1>
            <Comp2 one={product_Name}two={age}/>

        </div>

    );
}
export default Comp1;