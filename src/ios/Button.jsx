'use strict';

import { Component, PropTypes } from 'react';

class Button extends Component {
    render() {
        var className = 'ios ios-button';
        return <button onClick={this.props.onClick} className={className}>I'm a button, too</button>
    }
}

Button.propTypes = {
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: function () {
        console.log('button clicked');
    }
};

export default Button;