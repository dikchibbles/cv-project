import React from "react";
import Input from "./Input";

class GeneralInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: 'First name',
            lastName: 'Last name',
            email: 'email@email.com',
            phone: 'Phone',
        }
        this.saveInfo = this.saveInfo.bind(this)
    }

    saveInfo () {
        const paras = [];
        let count = 1;
        for (const key in this.state) {
            this.setState({
                [key]: document.getElementById(key).value
            }, () => {
                let newP = document.createElement('p');
                newP.textContent = this.state[key];
                newP.classList.add(count);
                paras.push(newP);
                console.log(this.state)
                const containingDiv = document.querySelector('.general-info');
                containingDiv.innerHTML = '';
                let h2 = document.createElement('h2')
                h2.textContent = 'General Info';
                containingDiv.append(h2);
                paras.forEach(p => containingDiv.append(p));
            })
        }
    }

    editInfo () {

    }

    render () {
        return (
            <div className="general-info">
                <h2>General Information</h2>
                <Input id='firstName' type="text" placeholderText={this.state.firstName} />
                <Input id='lastName' type="text" placeholderText={this.state.lastName} />
                <Input id='email' type="email" placeholderText={this.state.email} />
                <Input id='phone' type="tel" placeholderText={this.state.phone} />
                <button type="submit" value="Submit" onClick={this.saveInfo}>Submit</button>
            </div>
        )
    }
}

export default GeneralInfo;



