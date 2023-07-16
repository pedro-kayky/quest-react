import React, { Component } from 'react';
import './button.css';

const showlabel = (name) => {
alert('O nome desse label é ' + name);
};

class Button extends Component {
render() {
return (
    <button
    className="btn"
    onClick={() => showlabel(this.props.label)} 
    >
    {this.props.label}
    </button>
);
}
}

Button.defaultProps = {
label: 'clique aqui'
};

export default Button;
