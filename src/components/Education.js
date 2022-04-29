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
                const containingDiv = document.querySelector('.education');
                containingDiv.innerHTML = '';
                let h2 = document.createElement('h2')
                h2.textContent = 'Education';
                containingDiv.append(h2);
                paras.forEach(p => containingDiv.append(p));
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



