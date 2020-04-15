import React from 'react';
import {slide as Menu } from 'react-burger-menu';
import './SideBar.css';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Menu left width={'20%'}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}