'use strict';

import React from "react";
import { render } from "react-dom";
import "./style.less";

import Switch from "./ios/Switch.jsx";
import Button from "./ios/Button.jsx";

render((
    <div>
        <Switch />
        <Button />
    </div>
), document.getElementById("container"));

