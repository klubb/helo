import React, { Component } from 'react';
import axios from 'axios'
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            image: '',
            content: '',
            username: '',
            profile_picture: ''
        }
    }


    componentDidMount() {
        console.log(this.props.match.params.postid);
        axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
          console.log(res.data);
          this.setState({
            id: res.data[0].id,
            title: res.data[0].title,
            image: res.data[0].img,
            content: res.data[0].content,
            username: res.data[0].username,
            profile_picture: res.data[0].profile_pic
          });
        });
      }
    


    render() { 
        return ( <div>
            Post
            <p>Title: {this.state.title}</p>
            {/* <hr/> */}
            <p>Image: {this.state.image}</p>
            {/* <hr/> */}
            <p>Content: {this.state.content}</p>
            <p>username: {this.state.username}</p>
            {/* <img src="{this.state.profile_picture}" alt=""/> */}
        </div> );
    }
}
 
export default Post;