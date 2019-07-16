import React, {Component} from 'react';

class SingleTeamElement extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-3 text-center">

                <div className="card">
                    <div className="card-header">
                        <h2 className="font-weight-light mb-2" style={{color: '#FF8921'}}>{this.props.roles}</h2>
                        <h3 className="mb-0 font-weight-light">{this.props.name}</h3>
                    </div>
                    <div className="card-body">
                        <img src={this.props.image} alt=""
                             className="img-fluid rounded-circle shadow"/>
                    </div>
                    <div className="card-footer">

                        <button className="btn btn-info btn-icon btn-round" type="button">
                            <i style={{fontSize: '120%'}} className="fab fa-facebook-f"/>
                        </button>

                        <button style={{marginLeft: '5%', marginRight: '5%'}} className="btn btn-warning btn-icon btn-round" type="button">
                            <i style={{fontSize: '120%'}} className="fab fa-instagram"/>
                        </button>

                        <button className="btn btn-success btn-icon btn-round" type="button">
                            <i style={{fontSize: '120%'}} className="fab fa-whatsapp"/>
                        </button>

                    </div>
                </div>

            </div>
        );
    }
}

export default SingleTeamElement;