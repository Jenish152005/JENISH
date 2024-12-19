import { useState } from "react";

function Myhook(){

    let [state, setSate]=useState({

        name:"",
        errorname:"",
        lastname:"",
        email:"",
        password:"",

    });

    const  changeinput=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        setSate({
        ...state,
        [name]: value,

    });
    };

    const submitData = (e) => {
      
        if(e.target.name.value == ""){
            // alert("Please enter a")
            setState({
                ...state,
                errorname: "Please enter name",
            });
            // return false;
        }else{
            setState({
                ...state,
                errorname:"",
            });
        }
        e.preventDefault();
        if(errorname=="")
        {
            console.log(state);
        }
    }
        return(
            
            <>
                
                <h1>from validations</h1>
                <h1> name{state.name}</h1>
                <h1> name{state.lastname}</h1>
            <form   method="post" onSubmit={(e) => submitData(e)}>
                <table border="3" >
         
                    <tr>
                        <td>enter name</td>
                        <td><input type="text" name="name"  placeholder="Enter name"  onChange={(e) => changeinput(e)}/>{state.errorname}</td>
                    </tr>

                    <tr>
                        <td>enter last name</td>
                        <td><input type="text" name="last name"   placeholder="Enter name"  onChange={(e) =>  changeinput(e)}/></td>
                    </tr>

                    <tr>
                        <td>enter email</td>
                        <td><input type="text" name="email" placeholder="Enter name"  onChange={(e) =>  changeinput(e)} /></td>
                    </tr>

                    <tr>
                        <td>enter passwords</td>
                        <td><input type="text" name="password"   placeholder="Enter name"  onChange={(e) =>  changeinput(e)}/></td>
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
export default  Myhook;