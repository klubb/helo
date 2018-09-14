import React, { Component } from "react";
import {connect} from 'react-redux'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleChange = e => {
      console.log(this.state.title)
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  submit = () => {
      const {title, img, content} = this.state
      let body = {
        //   id: this.props.id,
          title: title,
          img: img,
          content: content
      }

      axios.post(`/api/post/${this.props.id}`, body).then(() => {
        return this.props.history.push("/dashboard");
        
      })
  }

  render() {
    console.log(this.state.title)
    console.log(this.props.id)
    return (
      <div>
        <input onChange={this.handleChange} placeholder="title" name="title" type="text" />
        <input onChange={this.handleChange} placeholder="image" name="img" type="text" />
        <input onChange={this.handleChange} placeholder="content" name="content" type="text" />
        <button onClick={this.submit}>Post</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        id: state.id
    }
}


export default connect(mapStateToProps, null)(Form);
