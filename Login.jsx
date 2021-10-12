import React from "react";
class Login extends React.Component{
    state={
        username:"",mobilenumber:"",pincode:"",locality:"",address:"",city:"",state:"",landmark:"",alternatephone:"",addresstype:""
    }
    updateForm=(e)=>{
        this.setState({...this.state,
            [e.target.name]:e.target.value})
    }
    saveHnadler=(event)=>{
   //event.preventDefault();
    console.log(this.state);
}
    cancelHandler=(event)=>{
        //event.preventDefault();
        console.log(this.state)
    
    }
    render(){
        return<>
        <pre>{JSON.stringify(this.state)}</pre>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                     <form onSubmit={this.saveHnadler} >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="text"  className="form-control" placeholder="Name" name="username" onChange={this.updateForm}/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="number"  className="form-control" placeholder="10-digit mobile number"name="mobilenumber"onChange={this.updateForm}/>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="text"  className="form-control" placeholder="Pincode"name="pincode" onChange={this.updateForm}/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text input-lg" className="form-control" placeholder="Locality"name="locality" onChange={this.updateForm}/>
                                </div>
                                </div>
                                <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address(Area and Street)"name="address" onChange={this.updateForm}/>
                                    </div>
                                    <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="text"  className="form-control" placeholder="City/District/Town" name="city" onChange={this.updateForm}/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <select  className="form-control" name="state"onChange={this.updateForm}>
                                        <option>-Select-state--</option>
                                        <option>A.P</option>
                                        <option>Bangalore</option>
                                        <option>Chanai</option>
                                    </select>
                                </div>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                <div className="form-group">
                                <input type="text"  className="form-control" placeholder="Landmark(optional)"name="landmark" onChange={this.updateForm}/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <input type="number"  className="form-control" placeholder="Alternate Phone(optional)"name="alternatephone"onChange={this.updateForm}/>
                                </div>
                                </div>
                                <p>Address Type</p>
                            <input type="radio"  name="home"onChange={this.updateForm} />
                                  <label>Home</label>
               <input type="radio"  name="work" onChange={this.updateForm}/>
                                  <label >Work</label>
                                  <div className="row">
                                <div className="col-md-6">
                                    <input type="submit" className="btn btn-primary btn-block" value="save"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="submit"className="btn btn-info btn-block" value="cancel"onClick={this.cancelHandler}/>
                                </div>
                                </div>
                                </form>
                 </div>   
                
            </div>
        </div>
        </>
    }
}
export default Login