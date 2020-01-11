import React from 'react'

const initialState = {
    name: "",
    nameErr: "",
    phone: "",
    phoneErr: "",
    address: "",
    gender: "",
    married: false

}

class PersonalInfo extends React.Component{
    constructor(props){
        super(props);

        this.state = initialState;
    }

    handleInputs = (e) =>{
        const isCheckbox = e.target.type === "checkbox";
        this.setState ({[e.target.name]: isCheckbox ? e.target.checked : e.target.value}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const isValid = this.validate();
        if (isValid)
        {
            console.log(this.state);
            this.setState(initialState)
        }
    }

    validate = () => {
        const validName = this.state.name.length > 0;
        const validPhone = this.state.phone.length > 0;
        this.setState ({
            nameErr: validName ? "" : "invalid name!",
            phoneErr: validPhone ? "" : "invalid phone!"
        })

        return validName && validPhone;
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Name:</p>
                        <input type="text" name="name" placeholder="Type name here" value={this.state.name} onChange={this.handleInputs} />
                        <div style={{color: "red", fontSize: "12"}}>{this.state.nameErr}</div>
                        <p>Phone:</p>
                        <input type="text" name="phone" placeholder="Type phone here" value={this.state.phone} onChange={this.handleInputs} />
                        <div style={{color: "red", fontSize: "12"}}>{this.state.phoneErr}</div>
                        <p>Address:</p>
                        <input type="textarea" name="address" placeholder="Type address here" value={this.state.address} onChange={this.handleInputs} />
                        <div>
                            <p>Gender:</p>
                            <select name="gender" value={this.state.gender} onChange={this.handleInputs}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Unkown</option>
                            </select>
                        </div>
                        <p>Married:</p>
                        <input type="checkbox" name="married" checked={this.state.married} onChange={this.handleInputs} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonalInfo