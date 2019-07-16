import React, {Component} from 'react';
import Moment from 'react-moment';
import {Link} from "react-router-dom";

class BlogSingle extends Component {
    render() {
        return (
            <div className="card">

                <div className="card-header" style={{borderBottom: '1px white solid'}}>
                    <h1 className="text-left">{this.props.title}</h1>
                </div>

                <div className="card-body">
                    <div className="row justify-content-center">

                        <div className="col-md-10">
                            <img src={this.props.cover} className="img-fluid rounded shadow-lg" alt={'cover'}/>

                            <div className="row">

                                <div className="col-md-8" style={{marginTop: '1%'}}>
                                    <div className="text-left">
                            <span style={{marginLeft: '2%', fontSize: '100%'}} className="badge badge-info">
                                <i style={{fontSize: '120%'}} className="fas fa-certificate"/>
                                {' ' + this.props.category}
                                </span>
                                        <br/>
                                        <span style={{marginLeft: '2%', fontSize: '100%'}} className="badge badge-success">
                                <i style={{fontSize: '120%'}} className="fas fa-map-marker-alt"/>
                                            {' ' + this.props.location}
                                </span>
                                        <br/>
                                        <span style={{marginLeft: '2%', fontSize: '100%'}} className="badge badge-neutral">
                                <i style={{fontSize: '120%'}} className="fas fa-calendar-day"/>
                                    <Moment format="DD-MM-YYYY">
                                         {this.props.date}
                                    </Moment>
                                </span>
                                    </div>
                                </div>

                                <div className="col-md-4" style={{marginTop: '5%'}}>
                                    <div className="text-right">
                                        {
                                            !this.props.complete && <Link to={'/post/' + this.props.id}>
                                                <button className="btn btn-neutral" style={{color: 'black'}}>Leggi tutto</button>
                                            </Link>
                                        }
                                    </div>
                                </div>

                            </div>



                        </div>


                    </div>

                </div>

            </div>
        );
    }
}

export default BlogSingle;
