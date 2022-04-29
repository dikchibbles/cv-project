import React from "react";
import Input from "./Input";

class Overview extends React.Component {
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

    saveInfo() {
        for (const key in this.state) {
            this.setState({
                [key]: document.getElementById(key).value
            })
        }
    }

    render() {
        return (
            <div className="general-info">
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

export default Overview;



