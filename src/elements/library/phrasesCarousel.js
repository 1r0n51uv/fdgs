import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";

class PhrasesCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryItems: ['"Un libro è un giardino che puoi custodire in tasca"',
                '"La lettura può creare indipendenza"',
                '"I libri seri non istruiscono, interrogano"',
                '"I libri si rispettano usandoli, non lasciandoli stare"',
                '"Scegli un libro. Ma forse lui ha scelto te"',

            ].map((i) => (<h1 className="h1-100" key={i}><em>{i}</em></h1>)),
        }

    }

    render() {
        return (
            <div className="col-md-12">
                <div className="brand" style={{textAlign: 'center'}} id="search">
                    <AliceCarousel
                        items={this.state.galleryItems}
                        autoPlayInterval={4000}
                        autoPlay={true}
                        fadeOutAnimation={true}
                        dotsDisabled={true}
                        buttonsDisabled={true}
                    />

                </div>
            </div>
        );
    }
}

export default PhrasesCarousel;