import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
//import Scrollspy from 'react-scrollspy';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <ScrollspyNav
                        scrollTargetIds={["section_1", "section_2", "section_3", "section_4", "section_5"]}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                        <nav id="navbar-pash" className="navbar sticky-top navbar-expand-lg navbar-light bg-light mt-3">
                            <a className="navbar-brand" href="#">PASH DIGI</a>
                            <ul className="nav nav-pills">
                                <li className="nav-item"><a className="nav-link" href="#Service">Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section_2">Company</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section_3">Values</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section_4">Prices</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section_5">Blog</a></li>  
                            </ul>
                        </nav>
                    </ScrollspyNav>
                </div>
                <div className="container">
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
                    <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
                    <div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
                    <div id="section_4" style={{"height": "500px"}}><span>Section 4</span></div>
                    <div id="section_5" style={{"height": "500px"}}><span>Section 5</span></div>
                </div>
            </div>

        );
    }
}

export default App;