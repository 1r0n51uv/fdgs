import React from 'reactn';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import Team from "../pages/team";
import Library from "../pages/library";
import Blog from "../pages/blog";
import AdminHome from "../admin/adminHome";
import AddPost from "../admin/addPost";
import EditLibrary from "../admin/editLibrary";
import PostSingle from "../pages/postSingle";
import Ppr from "../pages/ppr";

class Myrouter extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/library" component={Library}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/addPost" component={AddPost}/>
                    <Route path="/editLibrary" component={EditLibrary}/>
                    <Route path="/ppr" component={Ppr}/>
                    <Route path={`/post/:id`} component={PostSingle}/>
                </div>
            </Router>
        );
    }
}

export default Myrouter;