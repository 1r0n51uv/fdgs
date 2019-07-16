import React from 'reactn';

class MapComponent extends React.PureComponent {

    render() {

        return (

            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-xs-12">
                        <div className="contact_map">
                            <iframe title={'map'} width="100%" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Via%20Beniamino%20Marciano%2C%2070%2C%2080040%20Striano%20NA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            />
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default MapComponent;
