import React, {Component} from 'react';

class ChoosedBook extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">

                </div>
                <div className="card-body">


                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-md-6">

                                <h3 style={{color: '#FE881C'}}>Titolo:</h3>
                                <h4>{this.props.title}</h4>

                                <h3 style={{color: '#FE881C'}}>Autore:</h3>
                                <h4>{this.props.author}</h4>

                                <h3 style={{color: '#FE881C'}}>Editore:</h3>
                                <h4>{this.props.editor}</h4>

                                <h3 style={{color: '#FE881C'}}>Genere:</h3>
                                <h4>{this.props.genre}</h4>

                            </div>

                            <div className="col-md-6">

                                <h3 style={{color: '#FE881C'}}>Data:</h3>
                                <h4>{this.props.date}</h4>

                                <h3 style={{color: '#FE881C'}}>Posizione:</h3>
                                <h4>{this.props.position}</h4>

                                <h3 style={{color: '#FE881C'}}>Disponibilità:</h3>
                                <h4>
                                    {this.props.aviable === '1' &&
                                    <i className="fas fa-times" style={{color: 'red'}}/>}
                                    {this.props.aviable === '0' &&
                                    <i className="fas fa-check" style={{color: 'green'}}/>}
                                </h4>

                            </div>


                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default ChoosedBook;