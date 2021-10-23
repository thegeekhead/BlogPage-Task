import React, { Component } from "react";
import "./Headerstyle.css"

class Header extends Component {
    render() {
        return (
            <header>
                <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/cover-nodejs-backend.png" alt="" />
            </header>
        )
    }
}

export default Header;