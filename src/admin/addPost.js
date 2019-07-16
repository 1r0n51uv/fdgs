import React, {Component} from 'react';
import firebase from 'firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import AnotherSingle from "../elements/blog/anotherSingle";
require('firebase/firestore');


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cover: '',
            body: '',
            category: '',
            location: '',
            date: '',
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: "",
            filename: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.insertPost();

    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.log(error)
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref('blog/' + this.state.title + '-' + this.state.date)
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({avatarURL: url, filename: filename});
            });

    };

    insertPost() {
        firebase.firestore().collection('blog').add({
            title: this.state.title,
            cover: this.state.avatarURL,
            body: this.state.body,
            category: this.state.category,
            location: this.state.location,
            date: this.state.date
        }).then(() => {
            this.setState({
                title: '',
                cover: '',
                body: '',
                category: '',
                location: '',
                date: '',
                avatar: "",
                isUploading: false,
                progress: 0,
                avatarURL: "",
                filename: "",
            });
        });

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
                            <div className="row justify-content-center" style={{height: '100%'}}>

                                <div className="col-md-6">
                                    <div className="card card-register">

                                        <div className="card-body">

                                            <h1>Inserisci un post</h1>

                                            <form onSubmit={this.handleSubmit}>

                                                <div className="input-group">
                                                    <input type="text"
                                                           name="title"
                                                           className="form-control"
                                                           placeholder="Titolo"
                                                           onChange={this.handleChange}
                                                           value={this.state.title}
                                                           required={true}
                                                    />
                                                </div>

                                                <div className="input-group">
                                                    <input type="text"
                                                           name="location"
                                                           className="form-control"
                                                           placeholder="Dove?"
                                                           onChange={this.handleChange}
                                                           value={this.state.location}
                                                           required={true}
                                                    />
                                                </div>

                                                <div className="input-group">
                                                    <input type="date"
                                                           name="date"
                                                           className="form-control"
                                                           placeholder="Quando? (27 Dicembre 2018)"
                                                           onChange={this.handleChange}
                                                           value={this.state.date}
                                                           required={true}
                                                    />
                                                </div>

                                                <div className="input-group">
                                    <textarea
                                        name="body"
                                        className="form-control"
                                        placeholder="Descrizione"
                                        onChange={this.handleChange}
                                        value={this.state.body}
                                        required={true}
                                    />
                                                </div>

                                                <div className="input-group">
                                                    <div className="btn-group dropup">
                                                        <button type="button" className="btn btn-secondary dropdown-toggle"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            {this.state.category}
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" onClick={() => (
                                                                this.setState({
                                                                    category: 'Eventi'
                                                                })
                                                            )}>Eventi</a>
                                                            <a className="dropdown-item" href="#" onClick={() => (
                                                                this.setState({
                                                                    category: 'Corsi'
                                                                })
                                                            )}>Corsi</a>
                                                            <a className="dropdown-item" href="#" onClick={() => (
                                                                this.setState({
                                                                    category: 'Collaborazioni'
                                                                })
                                                            )}>Collaborazioni</a>
                                                        </div>
                                                    </div>

                                                    <CustomUploadButton
                                                        accept="image/*"
                                                        name="avatar"
                                                        storageRef={firebase.storage().ref("blog/" + this.state.title + '-' + this.state.date)}
                                                        onUploadStart={this.handleUploadStart}
                                                        onUploadError={this.handleUploadError}
                                                        onUploadSuccess={this.handleUploadSuccess}
                                                        onProgress={this.handleProgress}
                                                        style={{backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 4, marginLeft: '2%'}}
                                                    >
                                                        Carica Foto
                                                    </CustomUploadButton>





                                                </div>

                                                {this.state.isUploading && <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="progress-container progress-info">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                                     aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progress + '%'}}>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>

                                                </div>}


                                                <div className="input-group">
                                                    <input className="btn btn-outlined btn-success" type="submit" name="submit"
                                                           value="Inserisci"/>

                                                </div>

                                            </form>

                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-6">

                                    <AnotherSingle
                                        title={this.state.title}
                                        cover={this.state.avatarURL}
                                        body={this.state.body}
                                        category={this.state.category}
                                        location={this.state.location}
                                        date={this.state.date}
                                    />

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>




        );
    }
}

export default AddPost;
