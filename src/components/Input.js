import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form action="#">
                    <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholderText}></input>
                </form>
            </div>
        )
    }
}

export default Input