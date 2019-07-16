import React, {Component} from 'react';
import SingleTeamElement from "../elements/team/singleTeamElement";
import Navbar from "../ui/navbar";


class Team extends Component {
    render() {
        return (

            <div>
                <Navbar/>
                <div className="section section-signup">
                    <div className="container">

                        <div className="squares square-1"/>
                        <div className="squares square-2"/>
                        <div className="squares square-3"/>
                        <div className="squares square-4"/>



                        <div className="row justify-content-center">

                            <div className="col-md-7">
                                <div className="card">

                                    <div className="card-body">
                                        <blockquote className="blockquote blockquote-white">
                                            <p>Un' istituzione che fa da ponte tra i giovani e l'Amministrazione
                                                Comunale.
                                                Uno spazio pubblico, un punto di riferimento per i tanti ragazzi che
                                                sono alla ricerca di un confronto su quanto accade nel mondo.
                                                Un luogo dove agire per poter essere attivi al miglioramento sociale.
                                                Per chi vuole <b style={{color: '#FF8921'}}>IMPEGNARSI</b>.
                                                Per chi sente l'esigenza di <b style={{color: '#FF8921'}}>DIRE LA
                                                    SUA</b>.
                                                Per chi vuole contribuire alla costruzione del <b
                                                    style={{color: '#FF8921'}}>PROPRIO FUTURO</b>.
                                                Si va verso un'identità <b style={{color: '#FF8921'}}>EUROPEA</b>, non
                                                possiamo permetterci di rimanere chiusi nella nostra <b
                                                    style={{color: '#FF8921'}}>PICCOLA REALTA'</b>.
                                                Scambi culturali, gestione di luoghi pubblici, ricerche, iniziative e
                                                aggiornamenti sul mondo del lavoro giovanile.
                                                Domani sarà <b style={{color: '#FF8921'}}>TARDI</b> per fare quel che si
                                                può <b style={{color: '#FF8921'}}>OGGI</b>.
                                            </p>
                                        </blockquote>
                                    </div>

                                </div>

                                <br/>
                                <br/>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-on-back text-center" style={{fontSize: '800%', paddingBottom: '2%'}}>
                                <u>Direttivo</u>
                            </h1>
                            <hr/>
                        </div>


                        <div className="row row-grid justify-content-between align-items-center">


                            <div className="squares square-1"/>
                            <div className="squares square-2"/>


                            <div className="col-lg-12">

                                <div className="card">

                                    <div className="card-body">

                                        <div id="images">

                                            <div className="row">




                                                <SingleTeamElement
                                                    roles="Coordinatore"
                                                    name="Antonia Falco"
                                                    image="https://graph.facebook.com/1454602797/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Vice Coordinatore"
                                                    name="Danilo Castaldo"
                                                    image="https://graph.facebook.com/1629404770/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Segretario"
                                                    name="Giovanna Minichini"
                                                    image="https://graph.facebook.com/1608948625/picture?type=large&width=720&height=720"
                                                />


                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Silvia Gragnanelli"
                                                    image="https://graph.facebook.com/1087668299/picture?type=large&width=720&height=720"
                                                />


                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Valentina Nunziata"
                                                    image="https://graph.facebook.com/1579548844/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Pasqualina Carbone"
                                                    image="https://graph.facebook.com/100002127101074/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Gianmarco Del Giudice"
                                                    image="https://graph.facebook.com/100000025966068/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Riccardo Serafino"
                                                    image="https://graph.facebook.com/100000314416509/picture?type=large&width=720&height=720"
                                                />


                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Lorenzo Casillo"
                                                    image="https://graph.facebook.com/1082629606/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Pasquale Franzese"
                                                    image="https://graph.facebook.com/100001774694480/picture?type=large&width=720&height=720"
                                                />

                                                <SingleTeamElement
                                                    roles="Consigliere"
                                                    name="Severino Ammirati"
                                                    image="https://graph.facebook.com/1095226252/picture?type=large&width=720&height=720"
                                                />



                                            </div>
                                        </div>
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

export default Team;