import React, {Component} from 'react';
import { FirestoreCollection } from 'react-firestore'
import Loader from "react-loader-spinner";
import BlogSingle from "../elements/blog/blogSingle";
import Navbar from "../ui/navbar";

class Blog extends Component {


    render() {
        return (

            <div>

                <Navbar/>
                <div className="section section-signup">
                    <div className="squares square-1"/>
                    <div className="squares square-2"/>
                    <div className="squares square-4"/>
                    <div>
                        <h1 className="text-on-back text-center" style={{fontSize: '800%', paddingBottom: '2%'}}
                        ><u>Blog</u></h1>
                        <hr/>
                    </div>



                    <div>
                        <FirestoreCollection
                            path="blog"
                            sort="date:desc"
                            render={({ isLoading, data }) => {
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

                                    <div className="container">

                                        <div className="row justify-content-left">


                                            {
                                                data.map(post => (
                                                        <div className="col-sm-12 col-md-6 text-center" key={post.id}>

                                                            <BlogSingle
                                                                title={post.title}
                                                                cover={post.cover}
                                                                body={post.body.substring(0, 200) + '...'}
                                                                category={post.category}
                                                                location={post.location}
                                                                date={post.date}
                                                                id={post.id}
                                                                complete={false}

                                                            />

                                                        </div>
                                                    )
                                                )
                                            }

                                        </div>
                                    </div>
                                );
                            }
                            }

                        />

                    </div>


                </div>
            </div>






        );
    }
}

export default Blog;