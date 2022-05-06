import React from "react";
import Input from "./Input";

class WorkingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: 'Job title',
            company: 'Company',
            description: 'Job description',
            years: 'Years',
            months: 'Months',
        }
        this.saveInfo = this.saveInfo.bind(this);
    }

    recreateMainPage () {
        const containingDiv = document.querySelector('.working-experience');
        const form = document.createElement('form');
        containingDiv.innerHTML = '';
        let h2 = document.createElement('h2');
        h2.textContent = 'Working Experience';
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
        const containingDiv = document.querySelector('.working-experience');
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
                h2.textContent = 'Working Experience';
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

    render() {
        return (
            <div className="working-experience">
                <h2>Working Experience</h2>
                <Input id="jobTitle" type="text" placeholderText={this.state.jobTitle} />
                <Input id="company" type="text" placeholderText={this.state.company} />
                <Input id="description" type="text" placeholderText={this.state.description} />
                <Input id="years" type="number" placeholderText={this.state.years} />
                <Input id="months" type="number" placeholderText={this.state.months} />
                <button type="submit" value="Submit" onClick={this.saveInfo}>Submit</button>
            </div>
        )
    }
}

export default WorkingExperience;



