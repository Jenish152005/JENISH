import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state={

            firstname: "",
            lastname: "",
            email: "",
            phone:"",
            gender:"",
            dec:"",
        }
        
    }

  

    submitData=(e)=>{
        e.preventDefault();
        var firstname = e.target.firstname.value
        var lastname = e.target.lastname.value
        var email = e.target.email.value
        var phone= e.target.phone.value
        var gender=e.target.gender.value
        var dec=e.target.dec.value

        this.setState({
            firstname:firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            gender:gender,
            dec: dec
        })
        

    }
    render() {
        return (
            <>
            <h2>first name={this.state.firstname}</h2>
            <h2>last name={this.state.lastname}</h2>
            <h2>email={this.state.email}</h2>
            <h2>phone: {this.state.phone}</h2>
            <h2>gender: {this.state.gender}</h2>
            <h2>address: {this.state.dec}</h2>
              <h1> 
                <form method="post" onSubmit={(e) => this.submitData(e)}>
                <table border="2">
                <tr>
                    <td>enter your first name</td>
                    <td><input type="text" name="firstname" onChange={(e)=>this.changecityname(e)}/></td>
                </tr>

                <tr>
                    <td>enter your last name</td>
                    <td><input type="text" name="lastname" onChange={(e)=>this.changestatename(e)}/></td>
                </tr>
                <tr>
                    <td>enter your email</td>
                    <td><input type="email" name="email" onChange={(e)=>this.changeemail(e)}/></td>
                </tr>
                <tr>
                    <td>enter your phone number</td>
                    <td><input type="tel" name="phone" onChange={(e)=>this.changephone(e)}/></td>
                </tr>
                <tr>
                    <td>enter your gender</td>
                    <td><input type="text" name="gender" onChange={(e)=>this.changegender(e)}/></td>
                </tr>
                <tr>
                    <td>enter your city</td>
                    <td><input type="text" name="city" onChange={(e)=>this.changegender(e)}/></td>
                </tr>
                <tr>
                    <td>enter  Description</td>
                    <td><input type="text" name="dec" onChange={(e)=>this.changegender(e)}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit"  /></td>
                </tr>
                
                </table>
                </form>
            </h1> 
            </>
        )
    }
}
export  default Form;