import React, {Component} from 'react';
import Navbar from "../ui/navbar";
import firebase from "firebase";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
require('firebase/firestore');



class Ppr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            body: ''
        };

        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addNotification() {
        this.notificationDOMRef.current.addNotification({
            title: "Awesomeness",
            message: "Idea inserita correttamente!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 3000 },
            dismissable: { click: true }
        });
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

    insertPost() {
        firebase.firestore().collection('ideas').add({
            name: this.state.name,
            number: this.state.number,
            body: this.state.body
        }).then(() => {
            this.setState({
                name: '',
                number: '',
                body: ''
            });
        });
        this.addNotification();

    }


    render() {
        return (
            <div>
                <Navbar/>
                <ReactNotification ref={this.notificationDOMRef} />

                <div className="section section-signup">

                    <div className="container">

                        <div className="row">
                            <div className="squares square-1"/>
                            <div className="squares square-2"/>
                            <div className="squares square-3"/>
                            <div className="squares square-4"/>


                            <div className="col-md-6 col-sm-12 col-xs-12">

                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="text-on-back text-center" style={{fontSize: '800%'}}>Pensa</h1>
                                    </div>

                                    <div className="card-body">
                                        <h2>Hai un'idea che ti frulla in testa? Eventi, interessi personali, proposte di aggregazione, culturali o sportive, qualunque essa sia, è un'idea ed è UNICA</h2>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="text-on-back text-center" style={{fontSize: '600%'}}>Proponi</h1>
                                    </div>

                                    <div className="card-body">
                                        <h2>Compila i campi sottostanti oppure accedi con Facebook. Completando la proposta potrai inoltre usufruire della consegna/ritiro dei libri direttamente da casa tua, GRATUITAMENTE</h2>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12 col-xs-12">

                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="text-on-back text-center" style={{fontSize: '600%'}}>Realizza</h1>
                                    </div>

                                    <div className="card-body">
                                        <h2>Ad ogni meeting a cadenza settimanale, il nostro team valuterà le vostre proposte e potremo contattarvi per chiedervi ulteriori informazioni e rendervi ancora più PARTECIPI</h2>

                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row justify-content-center">

                                                <div className="col-md-6">


                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text"><i
                                                            className="fa fa-user"/></span>
                                                        </div>
                                                        <input type="text"
                                                               className="form-control"
                                                               name="name"
                                                               onChange={this.handleChange}
                                                               value={this.state.name}
                                                               required={true}
                                                               placeholder="Nome"/>

                                                    </div>


                                                </div>

                                                <div className="col-md-6">


                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text"><i
                                                            className="fab fa-whatsapp" style={{fontSize: '120%'}}/></span>
                                                        </div>
                                                        <input className="form-control"
                                                               name="number"
                                                               type="number"
                                                               onChange={this.handleChange}
                                                               value={this.state.number}
                                                               required={true}
                                                               placeholder="Telefono"/>
                                                    </div>


                                                </div>

                                                <div className="col-md-8">


                                                    <div className="input-group">
                                                    <textarea className="form-control"
                                                              placeholder="La tua idea?"
                                                              name="body"
                                                              onChange={this.handleChange}
                                                              value={this.state.body}
                                                              required={true}/>
                                                    </div>


                                                </div>

                                                <div className="col-md-12 text-center">
                                                    <button className="btn btn-success" type="submit" name="submit">
                                                        <i className="fas fa-lightbulb"/> Proponi
                                                    </button>

                                                </div>

                                            </div>
                                        </form>


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

export default Ppr;
