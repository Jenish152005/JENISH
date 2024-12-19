
import React from "react";
import { json } from "react-router-dom";
// import { Link } from "rea    ct-router-dom";


class Local extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            // userrecord: [],
            user: { name: "", email: "", age: "", },
            indexdata: -1,

        }

    };

    componentDidMount() {
        let record = JSON.parse(window.localStorage.getItem("record"));
        this.setState({
            data: record,
        })

    }


    submitData = (e) => {
        e.preventDefault();
        var name = e.target.name.value;
        var email = e.target.email.value;
        var age = e.target.age.value;

        var newdata = {
            name: name,
            email: email,
            age: age,
        };


        this.setState(
            previousState => ({ data: [...previousState.data, newdata] }),
            () => {
                window.localStorage.setItem("record", JSON.stringify(this.state.data));
            }
        );
    }



    deletrecord = (index) => {
        let record = JSON.parse(window.localStorage.getItem("record"));
        // console.log(index);
        record.splice(index, 1);
        window.localStorage.setItem("record", JSON.stringify(record));
        this.setState({
            data: record,
        });

    }

    updaterecord = (index) => {
        let record = JSON.parse(window.localStorage.getItem("record"))
        let userrecord = record[index];
        console.log(userrecord)
        this.setState({
            user: userrecord,
            indexdata: index,
        });

    }

    changedata = (e) => {
        let name = e.target.value;
        let value = e.target.name;

        let { user } = this.state;
        let data = { user, [name]: value };

        this.setState({
            user: data,
            indexdata: e,
        })
    }


    render() {
        return (
            <>
                <h1>Localstorage</h1>

                <form method="post" onSubmit={(e) => this.submitData(e)}>

                    <table border="2" align="center">
                        <tr>
                            <td>enter name</td>
                            <td><input onChange={(e) => this.changedata(e)} type="text" name="name" value={this.state.user.name} /></td>
                        </tr>


                        <tr>
                            <td>enter email</td>
                            <td><input type="text" name="email" value={this.state.user.email} /></td>
                        </tr>


                        <tr>
                            <td>enter age</td>
                            <td><input type="text" name="age" value={this.state.user.age} /></td>
                        </tr>


                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </table>
                </form>

                <br /> <br /> <br /> <br /> <br />

                <table border="3" align="center">

                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                        <td>delet</td>
                        <td>updated</td>
                    </tr>
                    {this.state.data.map((v, index) => {
                        return (
                            <tr>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.age}</td>
                                <td><button type="" onClick={(e) => this.deletrecord(index)}>delet</button>

                                    ||
                                    <button onClick={(e) => this.updaterecord(index)}>   UPDATE</button>
                                </td>
                                <td>
                                    {/* <link to={"/Editrecord/"+ index}>
                                    <button>update</button>
                                </link> */}


                                </td>
                            </tr>
                        )
                    })}


                </table>


            </>
        )
    }

}


export default Local;