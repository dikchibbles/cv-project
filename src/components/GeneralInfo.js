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

    recreateMainPage () {
        const containingDiv = document.querySelector('.general-info');
        const form = document.createElement('form');
        containingDiv.innerHTML = '';
        let h2 = document.createElement('h2');
        h2.textContent = 'General Info';
        containingDiv.append(h2);
        form.action = '#';
        for (const key in this.state) {
            const input = document.createElement('input');
            input.value = `${this.state[key]}`;
            input.id = key;
            form.append(input)
        }
        containingDiv.append(form);
        let btn = document.createElement('button');
        btn.textContent = 'Save';
        btn.onclick = () => {
            this.saveInfo()
        }
        containingDiv.append(btn)
    }

    saveInfo () {
        const containingDiv = document.querySelector('.general-info');
        const paras = [];
        for (const key in this.state) {
            this.setState({
                [key]: document.getElementById(key).value.trim()
            }, () => {
                let newP = document.createElement('p');
                newP.textContent = this.state[key];
                paras.push(newP);
                containingDiv.innerHTML = '';
                let h2 = document.createElement('h2');
                h2.textContent = 'General Info';
                containingDiv.append(h2);
                paras.forEach(p => containingDiv.append(p));
                let btn = document.createElement('button');
                btn.textContent = 'Edit';
                btn.onclick = () => {
                    this.recreateMainPage()
                }
                containingDiv.append(btn)
            })
        }
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



