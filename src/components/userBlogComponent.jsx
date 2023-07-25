// import React, { PureComponent } from 'react'
// import BlogServices from '../services/BlogServices';

// class UserBlogComponent extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.state = {
//             blogs:[]
//         }
//     }

//     componentDidMount() {
//         BlogServices.getBlogsByUserId("rana").then((res) => {
//           this.setState({ blogs: res.data });
//         });
//       }

//     render() {
//         return (
//             <div className='row my-3'>
//                                 <div className="container">
//                                 { this.state.blogs.map(blog=>
//                                     <div className="card" style={{width: "40rem",padding: "10px", margin:"30px"}}>
//                                     <div className="card-body">
//                                     <div className='column' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
//                                     <h5 className="card-title"><b>{blog.title}</b></h5>
//                                     <footer className="blockquote-footer">{blog.blogId}</footer>
//                                     </div>
//                                     <p className="card-text">{blog.content}</p>
//                                     </div>
//                                 </div>
//                                 )
//                                 }       
//                                 </div>
//                 </div>
//         )
//     }
// }


// export default UserBlogComponent


import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import BlogServices from '../services/BlogServices';

const UserBlogComponent = () => {
  const { userId } = useParams(); 
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogsByUserId();
  }, []);
  const fetchBlogsByUserId = async () => {
    try {
      const response = await BlogServices.getBlogsByUserId(userId); 
      console.log("response : "+blogs)
      setBlogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
<div className='container d-flex flex-column' style={{height:"100%", borderRight: '1px solid black', borderLeft: '1px solid black', display: 'flex', alignItems: 'center' }}>
      <h2 className='text-center' style={{ marginTop: '20px', fontFamily: 'nunito' }}>
        You are seeing all blogs by: <b>{userId}</b>
      </h2>
      <div className='row my-3'>
        <div className='container'>
            {blogs.map((blog) => (
                <div key={blog.blogId} className='card' style={{ width: '40rem', padding: '10px', margin: '30px' }}>
                <div className='card-body'>
                    <div className='column' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 className='card-title'>
                        <b>{blog.title}</b>
                    </h5>
                    </div>
                    <p className='card-text'>{blog.content}</p>
                    <footer className='muted'>
                    <Link to={`/user-blog/${blog.userId}`} state={blog.userId} className='muted'>
                        by <b><i>{blog.userId}</i></b>
                    </Link>
                    <p>{blog.email}</p>
                    </footer>
                </div>
                <div>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'left' }}>
                    <button to='/update-blog' className='btn btn-primary'>
                        Update
                    </button>
                    <button to='/delete-blog' className='btn btn-danger'>
                        Delete
                    </button>
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserBlogComponent;
