import React, { Component } from 'react';
// import logo from '../images/logo.png';
// TODO change logo to lottie animation
// import animationData from '../images/lottie/forest.json';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
     state = {
         isOpen: false
     }
     handleToggle = () => {
         this.setState({isOpen: !this.state.isOpen})
     }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <div alt="logo" className="logo">
                                Logo here
                            </div>
                            {/* <img src={logo} alt="logo" className="logo" /> */}
                        </Link>
                        <button 
                            type="button" 
                            className="nav-btn"
                            onClick={this.handleToggle}
                            >
                            <FaAlignJustify className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/hikes">Kartta</Link>
                        </li>
                        <li>
                            <Link to="/">TyhjäLinkki</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}