import React, { PureComponent } from 'react'
import BlogServices from '../services/BlogServices';

class UserBlogComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            blogs:[]
        }
    }

    componentDidMount() {
        BlogServices.getBlogsByUserId("rana").then((res) => {
          this.setState({ blogs: res.data });
        });
      }

    render() {
        // const location = useLocation()
        // const { from } = location.state;
        return (
            <div className='row my-3'>
                                <div className="container">
                                { this.state.blogs.map(blog=>
                                    <div className="card" style={{width: "40rem",padding: "10px", margin:"30px"}}>
                                    <div className="card-body">
                                    <div className='column' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                    <h5 className="card-title"><b>{blog.title}</b></h5>
                                    <footer className="blockquote-footer">{blog.blogId}</footer>
                                    </div>
                                    <p className="card-text">{blog.content}</p>
                                    </div>
                                </div>
                                )
                                }       
                                </div>
                </div>
        )
    }
    // render() {
    //     return (
    //       <div>
    //         <h2>User Blog Component</h2>
    //         <div>
    //           {this.state.blogs.map((blog) => (
    //             <div key={blog.id}>
    //               <h3>{blog.title}</h3>
    //               <p>{blog.content}</p>
    //               <hr />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     );
    //   }
    // }
}


export default UserBlogComponent