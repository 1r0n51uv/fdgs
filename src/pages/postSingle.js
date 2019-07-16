import React, {Component} from 'react';
import { FirestoreDocument } from 'react-firestore'
import AnotherSingle from "../elements/blog/anotherSingle";

class PostSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.location.pathname.substring(6)
        }
    }

    render() {
        return (
            <div className="section section-signup">
                <div className="container">

                    <div className="squares square-1"/>
                    <div className="squares square-2"/>
                    <div className="squares square-3"/>
                    <div className="squares square-4"/>



                    <div className="row justify-content-center align-content-center ">



                        <FirestoreDocument
                            path={'blog/' + this.state.url}
                            render={({ isLoading, data }) => {
                                return isLoading ? (
                                    <div></div>
                                ) : (
                                    <div className="col-sm-12 col-md-10 text-center">

                                        <AnotherSingle
                                            title={data.title}
                                            cover={data.cover}
                                            body={data.body}
                                            category={data.category}
                                            location={data.location}
                                            date={data.date}
                                            id={data.id}
                                            complete={true}
                                        />

                                    </div>
                                );
                            }}
                        />

                    </div>



                </div>
            </div>
        );
    }
}

export default PostSingle;
