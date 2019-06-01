import React, { Component } from "react";

 import GlobalContext from "./global-context";
import axios from 'axios';

 export default class GlobalState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = async() => {
    const response = await axios.get('/article');
    console.log('fetch articles:', response.data)
    let len = response.data.length;
    const articles = response.data;
    this.setState({ articles })
  }

   render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
