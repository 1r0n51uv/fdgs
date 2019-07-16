import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-info fixed-top">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="/home">
                            <span>FDGS</span>triano
                        </a>
                        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"/>
                            <span className="navbar-toggler-bar bar2"/>
                            <span className="navbar-toggler-bar bar3"/>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a style={{color: '#0073e2'}} href="/home">
                                        FDGS
                                    </a>
                                </div>
                                <div className="col-6 collapse-close text-right">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                                            data-target="#navigation" aria-controls="navigation-index"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="tim-icons icon-simple-remove"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav">


                            <li className="nav-item p-0">
                                <Link to={'/home'}>
                                    <span className="nav-link"><i className="fas fa-home"/>Home</span>
                                </Link>

                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/blog'}>
                                    <span className="nav-link"><i className="far fa-newspaper"/>Blog</span>
                                </Link>
                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/team'}>
                                    <span className="nav-link"><i className="fas fa-users"/>Team</span>
                                </Link>
                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/ppr'}>
                                    <span  className="nav-link"><i className="far fa-lightbulb"/>PPR</span>
                                </Link>
                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/library'}>
                                    <span className="nav-link"><i className="fas fa-book-open"/>Biblioteca</span>
                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>


            </nav>
        );
    }
}

export default Navbar;
