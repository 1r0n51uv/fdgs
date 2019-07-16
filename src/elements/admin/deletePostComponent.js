import React, {Component} from 'react';
import firebase from 'firebase'

class DeletePostComponent extends Component {

    static showId(val) {
        firebase.firestore().collection('blog').doc(val).delete().then(value => {

        })

    }

    render() {
        return (
            <div className="row">

                <div className="col-md-2">

                    <h4>{this.props.title}</h4>

                </div>

                <div className="col-md-2">

                    <h4>{this.props.location}</h4>

                </div>

                <div className="col-md-2">

                    <h4>{this.props.date}</h4>

                </div>

                <div className="col-md-2">

                    <h4>{this.props.category}</h4>

                </div>

                <div className="col-md-3">

                    <p>{this.props.body}</p>

                </div>

                <div className="col-md-1">
                    <button
                        onClick={() => (
                            DeletePostComponent.showId(this.props.id)
                        )}
                        className="btn btn-danger btn-icon btn-round"
                        type="button">
                        <i className="tim-icons icon-simple-remove"/>
                    </button>

                </div>



            </div>
        );
    }
}

export default DeletePostComponent;
