import React from 'react';

function Comp2(props){
    return(
        <div>
            <h1 style={{backgroundColor:'blue'}}>component two:{props.one}****{props.two}</h1>
<pre>{JSON.stringify(props)}</pre>
        </div>

    );
}
export default Comp2;