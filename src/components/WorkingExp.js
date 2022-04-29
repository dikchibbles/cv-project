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
                const containingDiv = document.querySelector('.working-experience');
                containingDiv.innerHTML = '';
                let h2 = document.createElement('h2')
                h2.textContent = 'Working Experience';
                containingDiv.append(h2);
                paras.forEach(p => containingDiv.append(p));
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



