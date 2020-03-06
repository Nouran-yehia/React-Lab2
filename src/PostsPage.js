import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import SearchInput, { createFilter } from 'react-search-input'

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {posts: [], search: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    debugger
    const { match: { params: { userId } } } = this.props;
    const url = !userId ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`;
    axios.get(url).then((result) => {
      this.setState({ posts: result.data })
    }
    )
  }

  handleChange(title) {

    this.setState({
      search : title
    });
  }

  render() {
    const filter = this.state.posts.filter(createFilter(this.state.search,['title']))
    return (
      <>
      <div>
          <SearchInput onChange={this.handleChange} />
        </div>
        <div>
        
          {filter.map((posts)=>
          <div className="post" key="post.id">
                        <div>{posts.id}</div>
                        <div>{posts.body}</div>
          </div>
          )
          }
        </div>
        </>
    )
  }
}

export default withRouter(PostsPage);