/** @jsx React.DOM */
var React = window.React = require('react');
var Route = require('react-nested-router').Route;
var models = require('./models.js'),
    Review = require('./review.jsx'),
    Header = require('./header.jsx'),
    SearchFeed = require('./feed.jsx').SearchFeed,
    UserFeed = require('./feed.jsx').UserFeed,
    Editor = require('./editor.jsx'),
    Following = require('./follows.jsx').Following,
    Followers = require('./follows.jsx').Followers,
    About = require('./about.jsx'),
    FAQ = require('./faq.jsx');

var Site = React.createClass({
    render: function() {
        return <div>
            <Header />
            {this.props.activeRoute}
        </div>;
    }
});

React.renderComponent((
    <Route handler={Site}>
        <Route name="index" path="/" handler={About}/>
        <Route name="review" path="/review" handler={Review }/>
        <Route name="feed" path="/feed" handler={UserFeed}/>
        <Route name="search" path="/search" handler={SearchFeed}/>
        <Route name="create" path="/create" handler={Editor}/>
        <Route name="edit" path="/edit/:cardKey" handler={Editor}/>
        <Route name="about" path="/about" handler={About}/>
        <Route name="faq" path="/faq" handler={FAQ}/>
        <Route name="user" path="/user/:userKey" handler={UserFeed}/>
        <Route name="following" path="/user/:userKey/following" handler={Following}/>
        <Route name="followers" path="/user/:userKey/followers" handler={Followers}/>
    </Route>
), document.body);
