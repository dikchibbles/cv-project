import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholderText}></input>
        )
    }
}

export default Input