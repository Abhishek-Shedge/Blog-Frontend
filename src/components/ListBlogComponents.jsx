import React, { useEffect, useState } from 'react';
import BlogServices from '../services/BlogServices';
import { Link } from 'react-router-dom';

const ListBlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    BlogServices.getBlogs().then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div className='container d-flex flex-column' style={{borderRight: '1px solid black', borderLeft: '1px solid black', display: 'flex', alignItems: 'center' }}>
      <h2 className='text-center' style={{ marginTop: '20px', fontFamily: 'nunito' }}>
        <b>Blog Dashboard</b>
      </h2>
      <div className='row' style={{ marginTop: '20px', width: '700px' }}>
        <Link to='/add-blog' className='btn btn-primary'>
          Add Blog
        </Link>
      </div>
      <div className='row my-3'>
        <div className='container'>
          {blogs.map((blog) => (
            <div key={blog.blogId} className='card shadow p-3 mb-5 bg-white rounded' style={{ width: '40rem', padding: '10px', margin: '30px' }}>
              <div className='card-body'>
                <div className='column' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h5 className='card-title'>
                    <b>{blog.title}</b>
                  </h5>
                  <footer className='blockquote-footer'>{blog.blogId}</footer>
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

export default ListBlogComponent;
