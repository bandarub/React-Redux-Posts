import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Createpost from "./CreatePost";
import Home from "./Homepage";
import DisplayPost from "./DisplayPost";
import Editing from "./Editing";
import About from "./About";
import Contact from "./Contact";

const Routing = props => {
  const { posts, getSelectedPost } = props;
  return (
    <div>
      <HashRouter>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                posts={posts}
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
          exact
            path="/newpost"
            render={props => (
              <Createpost
                {...props}
                posts={posts}
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
          exact
            path="/posts/:postId"
            active="black"
            render={props => (
              <DisplayPost
                {...props}
                posts={posts}
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
            exact
            path="/posts/:postId/edit"
            render={props => (
              <Editing
                {...props}
                posts={posts}
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
            exact
            path="/About"
            component={About}
          />
          <Route
            exact
            path="/Contact"
            component={Contact}
          />
        </div>
      </HashRouter>
    </div>
  );
};

export default Routing;
