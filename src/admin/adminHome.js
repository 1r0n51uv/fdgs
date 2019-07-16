import React, {Component} from 'react';
import AddPost from "./addPost";
import RemovePost from "./removePost";

class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageView: ''
        }
    }




    render() {
        return (
            <div>
                <div className="section section-signup">

                    <div>
                        <div className="squares square-1"/>
                        <div className="squares square-2"/>
                        <div className="squares square-3"/>
                        <div className="squares square-4"/>

                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-md-12">
                                    <div className="card">

                                        <div className="card-body" style={{textAlign: 'center'}}>

                                            <div className="row justify-content-center">

                                                <div className="col-md-4 col-sm-12">
                                                    <h1>Pannello Amministratore</h1>
                                                    <ul className="nav nav-pills nav-pills-primary nav-pills-icons">

                                                        <li className="nav-item">
                                                            <a className="nav-link show" data-toggle="tab" href="#" onClick={() => (
                                                                this.setState({
                                                                    pageView: 'add'
                                                                })
                                                            )}>
                                                                <i className="tim-icons icon-simple-add"/> Aggiungi un Post
                                                            </a>
                                                        </li>

                                                        <li className="nav-item">
                                                            <a className="nav-link show" data-toggle="tab" href="#" onClick={() => (
                                                                this.setState({
                                                                    pageView: 'remove'
                                                                })
                                                            )}>
                                                                <i className="tim-icons icon-simple-remove"/> Rimuovi un Post
                                                            </a>
                                                        </li>

                                                        <li className="nav-item">
                                                            <a className="nav-link show" href="/editLibrary">
                                                                <i className="tim-icons icon-book-bookmark"/> Gestisci Biblioteca
                                                            </a>
                                                        </li>


                                                    </ul>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                        { this.state.pageView === 'add' && <AddPost/> }

                        { this.state.pageView === 'remove' && <RemovePost/> }



                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;
