import React, { Component } from "react";

import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      checkbox: true,
      posts: []
    };
  }

  componentDidMount=()=>{
    axios.get('/api/posts').then(res=>{
        this.setState({posts:res.data})
    })
}


  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };


  render() {

    let displayPosts = this.state.posts.map((post, i) => {
        return (
            <Link to={`/post/${post.id}`} key={i}><div>{post.title} {post.username} {post.content} {post.profile_pic}</div></Link>
        )
    })

    return (
      <div>
        Dashboard
        <input onChange={this.handleChange} placeholder="Search" type="text" />
        <button>Search</button>
        <button>Reset</button>
        {displayPosts}
      </div>
    );
  }
}

export default Dashboard;
