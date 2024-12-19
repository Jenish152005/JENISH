
import React from "react";
import "./assest/css/from.css";

class Fromvalida extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name :"",
            errorname:"",
            email:"",
            erroremail:"",
            password:"",
            errorpassword:"",
        };

    }
        changedata = (e) => {
            const name = e.target.name;
            const value = e.target.checked === true ?e.target.value : "";
            this.setState({
                [name]: value,
            });
        }

        submitData =(event) => {
            event.preventDefault();
            if(event.target.name.value == ""){
                // alert("Please enter a")
                this.setState({
                    errorname: "Please enter name",
                });
                return false;
            }else{
                this.setState({
                    errorname:"",
                });
            }



            if(event.target.email.value == ""){
                // alert("Please enter a")
                this.setState({
                    erroremail: "Please enter email",
                });
                return false;
            }else{
                this.setState({
                    erroremail:"",
                });
            }

            
            if(event.target.password.value == ""){
                // alert("Please enter a")
                this.setState({
                    errorpassword: "Please enter password",
                });
                return false;
            }else{
                this.setState({
                    errorpassword:"",
                });
            }
           
           
        }
render(){
    return (
    <>
    <h1>form validation</h1>
    <p>name:{this.state.name}</p>
    <p>email:{this.state.email}</p>
    <p>password:{this.state.password}</p>

    <form className="myfirst" method="post" onSubmit={(e) => this.submitData(e)}>
        <table border="4" cellspacing="0" cellpadding="">
                <tr>
                    <td>enter name</td>
                    <td><input type="text" name="name" placeholder="Enter" onChange={(e) => this.changedata(e)} />{this.state.errorname}</td>
                </tr>
                <tr>
                    <td>enter email</td>
                    <td><input type="email" name="email" placeholder="Enter" onChange={(e) => this.changedata(e)} />{this.state.erroremail}</td>
                </tr>

                <tr>
                    <td>enter password</td>
                    <td><input type="password" name="password" placeholder="Enter" onChange={(e) => this.changedata(e)} />{this.state.errorpassword}</td>
                </tr>

                <tr>
                    <td>select gender</td>
                    <td> <input type="radio" name="gender" onChange={(e) => this.changedata(e)}/> male <input type="radio" name="gender" onChange={(e) => this.changedata(e)}/>female</td>
                </tr>

                <tr>
                    <td>select city </td>
                    <td>
                        <select name="city" onChange={(e) => this.changedata()}>
                            <option>select city</option>
                            <option>surat</option>
                            <option>vadodra</option>
                            <option>khambha</option>
                            </select>
                       
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit"  /></td>
                </tr>
        </table>
    </form>
    </>
    )
}
}

export default Fromvalida;