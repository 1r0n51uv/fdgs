import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import {FirestoreCollection} from "react-firestore";
import DeletePostComponent from "../elements/admin/deletePostComponent";

class RemovePost extends Component {
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

                                <div className="col-md-12">
                                    <div className="card card-register">

                                        <div className="card-body">

                                            <h1>Rimuovi un post</h1>

                                            <FirestoreCollection
                                                path="blog"
                                                sort="date:desc"
                                                render={({ isLoading, data }) => {
                                                    return isLoading ? (
                                                        <div className="col-md-12 text-center">
                                                            <Loader
                                                                type="Puff"
                                                                color="black"
                                                                height="100"
                                                                width="100"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="container">
                                                            {
                                                                data.map(post => (
                                                                        <DeletePostComponent
                                                                            key={post.id}
                                                                            title={post.title}
                                                                            location={post.location}
                                                                            date={post.date}
                                                                            category={post.category}
                                                                            body={post.body}
                                                                            id={post.id}
                                                                        />
                                                                    )
                                                                )
                                                            }
                                                        </div>
                                                    );
                                                }}
                                            />
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

export default RemovePost;
