import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Moment from 'react-moment';

class AnotherSingle extends Component {
    render() {

        return (
            <div className="card">

                <div className="card-header" style={{borderBottom: '1px white solid'}}>
                    <h1 className="text-left">{this.props.title}</h1>
                </div>

                <div className="card-body">
                    <div className="row">

                        <div className="col-md-6">
                            <img src={this.props.cover} className="img-fluid rounded shadow-lg" alt={'cover'}/>
                            <div className="text-left" style={{marginTop: '1%'}}>
                            <span style={{marginLeft: '2%', fontSize: '75%'}} className="badge badge-info">
                                <i style={{fontSize: '120%'}} className="fas fa-certificate"/>
                                {' ' + this.props.category}
                                </span>

                                <span style={{marginLeft: '2%', fontSize: '75%'}} className="badge badge-success">
                                <i style={{fontSize: '120%'}} className="fas fa-map-marker-alt"/>
                                    {' ' + this.props.location}
                                </span>

                                <span style={{marginLeft: '2%', fontSize: '75%'}} className="badge badge-neutral">
                                <i style={{fontSize: '120%'}} className="fas fa-calendar-day"/>
                                    <Moment format="DD-MM-YYYY">
                                        {this.props.date}
                                    </Moment>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-6 justify-content-left">
                            <blockquote className="blockquote blockquote-white">
                                {this.props.body}
                            </blockquote>

                            {
                                !this.props.complete && <Link to={'/post/' + this.props.id}>
                                    <button className="btn btn-neutral" style={{color: 'black'}}>Leggi tutto</button>
                                </Link>
                            }




                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default AnotherSingle;
