import React from "react";
import './Footer.css'
class Footer extends React.Component{
    render(){
        return <div><h1>hello</h1>
        <p>Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.
</p>
<table border="1">
    <thead>
        <th>id</th>
        <th>name</th>
        <th>email</th>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>rama</td>
            <td>rama@gmail.com</td>
        </tr>
    </tbody>
</table>
        </div>
    }
}
export default Footer;