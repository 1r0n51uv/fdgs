import React, {Component} from 'react';
import {FirestoreCollection} from "react-firestore";
import Loader from "react-loader-spinner";

class HomeCarousel extends Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide">

                <FirestoreCollection
                    path="homeSlider"
                    sort="date:desc"
                    limit={3}
                    render={({isLoading, data}) => {
                        return isLoading ? (
                            <div className="col-md-12 text-center">
                                <Loader
                                    type="Watch"
                                    color="white"
                                    height="100"
                                    width="100"
                                />
                            </div>
                        ) : (
                            <div className="carousel-inner">

                                {
                                    data.map((data,i) => (
                                            (i === 0 &&
                                                <div className="carousel-item active" key={data.id}>
                                                    <img className="d-block w-100" src={data.cover}
                                                         alt="First slide"/>
                                                </div>) || (<div className="carousel-item" key={data.id}>
                                                    <img className="d-block w-100" src={data.cover}
                                                         alt="First slide"/>
                                                </div>
                                            )
                                        )
                                    )
                                }

                            </div>
                        )
                    }}
                />


                <a className="carousel-control-prev" href="#carouselExampleControls"
                   role="button" data-slide="prev" onClick={this.props.backward}>
                    <i className="tim-icons icon-minimal-left"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls"
                   role="button" data-slide="next" onClick={this.props.forward}>
                    <i className="tim-icons icon-minimal-right" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default HomeCarousel;