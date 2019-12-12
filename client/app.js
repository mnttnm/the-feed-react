import ReactDOM from "react-dom";
import React, { Component } from "react";
import Header from "./components/Header";
import StyledPostContainer from "./components/PostsContainer";
import "../client/public/app.css"; // this is possible by use of webpack css-loader
import io from "socket.io-client";
import "../client/config";
import PostContextProvider from "./context/PostContext";
import Filter from "./components/Filters";
import Modal from './components/TagModal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      showModal: false
    };
    this.addPostToDashBoard = this.addPostToDashBoard.bind(this);
    const self = this;
    var socket = io.connect("http://localhost:4000");
    socket.on("server-msg", function(data) {
      console.log(data);
      socket.emit("client-msg", {
        client_msg: "Hello from client!"
      });
    });

    socket.on("server-post-added", function(data) {
      console.log("## post receive from server: ", data);
      self.addPostToDashBoard(data.new_post);
      socket.emit("client-post-received", {
        client_msg: "Post update is received!"
      });
    });
  }

  onModalButtonClick = () => {
    this.setState({showModal: !this.state.showModal});
  }

  addPostToDashBoard(post) {
    const newArray = [...this.state.posts];
    newArray.push(post);
    this.setState({
      posts: newArray
    });
  }

  render() {
    console.log("comp getting rendered!");
    return (
      <>
        <Header/>
        <div id="main-content">
          <PostContextProvider>
            <StyledPostContainer />
            <Filter/>
            {this.state.showModal && <Modal/>}
          </PostContextProvider>
        </div>
      </>
    );
  }
}

const appRoot = document.getElementById("root");
ReactDOM.render(<App />, appRoot);
