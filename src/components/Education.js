import React from "react";
import Input from "./Input";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highSchool: 'High School',
            university: 'University',
            college: 'College',
        }
        this.saveInfo = this.saveInfo.bind(this);
    }

    recreateMainPage () {
        const containingDiv = document.querySelector('.education');
        const form = document.createElement('form');
        containingDiv.innerHTML = '';
        let h2 = document.createElement('h2');
        h2.textContent = 'Education';
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
        const containingDiv = document.querySelector('.education');
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
                h2.textContent = 'Education';
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
            <div className="education">
                <h2>Education</h2>
                <Input id='highSchool' type="text" placeholderText={this.state.highSchool} />
                <Input id='university' type="text" placeholderText={this.state.university} />
                <Input id='college' type="text" placeholderText={this.state.college} />
                <button type="submit" value="Submit" onClick={this.saveInfo}>Submit</button>
            </div>
        )
    }
}

export default Education;



