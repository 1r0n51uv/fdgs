import React from 'reactn';
import Navbar from "../ui/navbar";
import path1 from "./../resources/path1.png";
import HomeCarousel from "../ui/homeCarousel";
import HomeSliderDescription from "../ui/homeSliderDescription";


class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sliderIndex: 0
        };
        this.forwardSlide = this.forwardSlide.bind(this);
        this.backwardSlide = this.backwardSlide.bind(this);
    }

    forwardSlide() {
        if (this.state.sliderIndex === 2) {
            this.setState({
                sliderIndex: 0
            });
        } else {
            this.setState({
                sliderIndex: this.state.sliderIndex + 1
            });
        }
    }

    backwardSlide() {
        if (this.state.sliderIndex === 0) {
            this.setState({
                sliderIndex: 2
            });
        } else {
            this.setState({
                sliderIndex: this.state.sliderIndex - 1
            });
        }
    }

    render() {

        return (

            <div>
                <Navbar/>

                <div className="section section-basic">

                    <div className="wrapper">

                        <div className="page-header header-filter">
                            <div className="squares square1"/>
                            <div className="squares square2"/>
                            <div className="squares square3"/>
                            <div className="squares square4"/>
                            <div className="squares square5"/>
                            <div className="squares square6"/>
                            <div className="squares square7"/>
                            <div className="container justify-content-center">
                                <div className="content-center brand">
                                    <h1 className="h1-seo">Forum <br/>dei Giovani <br/>Striano</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="main">

                        <img src={path1} className="path" alt={'path1'}/>

                        <div className="section">
                            <div className="container">
                                <div className="row justify-content-between align-items-center">

                                    <div className="col-lg-7">

                                        <HomeCarousel
                                            forward={this.forwardSlide}
                                            backward={this.backwardSlide}
                                        />


                                    </div>

                                    <div className="col-lg-4">

                                        <HomeSliderDescription sliderIndex={this.state.sliderIndex}/>

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

export default Home;
