import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Homepage";
import DisplayPost from "./DisplayPost";
import About from "./About";
import Navigation from "./Navigation";
import Form from "./Form";

const Routing = props => {
  const { posts, getSelectedPost } = props;
  return (
    <div>
      <HashRouter>
        <div>
          <Navigation/>
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
              <Form
                {...props}
                posts={posts}
                action="add"
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
              <Form
              action="edit"
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
        </div>
      </HashRouter>
    </div>
  );
};

export default Routing;
