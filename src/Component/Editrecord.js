import { json, useParams } from "react-router-dom";
import { useState } from "react";

function Editrecord(){
    let pos=useParams();
    let [name,setname]=useState("");
    let [email,useemail]=useState("");
    let [age,useage]=useState("");

    let record= json.parse(window.localStorage.getItem("record"));

    let data=record[pos.index]

    const  submitData=(e)=> {
        e.preventDefault()
        let name= e.target.name.value;
        let email= e.target.email.value;
        let age= e.target.age.value;
        let newdata={name:name, email:email, age:age}

    }

    return(
        <>
            
            <form method="post"  onSubmit={(e) => this.submitData(e)}>

<table border="2" align="center">
    <tr>
        <td>enter name</td>
        <td><input type="text" name="name" value={name? name : data
        .name
        } onChange={(e) => setname(e.target.value)} /></td>
    </tr>


    <tr>
        <td>enter email</td>
        <td><input type="text"  name="email"/></td>
    </tr>


    <tr>
        <td>enter age</td>
        <td><input type="text"  name="age"/></td>
    </tr>


    <tr>
        <td></td>
        <td><input type="submit" /></td>
    </tr>
</table>
</form>

        </>
    )
}
export default Editrecord;
