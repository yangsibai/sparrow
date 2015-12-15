'use strict';

import React from 'react';

class Button extends React.Component {
    render() {
        var className = 'ios ios-button';
        return <button className={className}>I'm a button</button>
    }
}

export default Button;