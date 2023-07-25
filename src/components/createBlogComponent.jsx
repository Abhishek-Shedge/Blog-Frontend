import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogServices from '../services/BlogServices';

const CreateBlogComponent = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const saveBlog = () => {
    if (userId.length === 0 || title.length === 0 || content.length === 0 || email.length === 0) {
        window.alert('Enter all the fields');
        return;
      }
    
      const blog = { userId, email, title, content };
      console.log('Blogs => ' + JSON.stringify(blog));
    
      BlogServices.addBlogs(blog).then((res) => {
        window.alert('Blog added Successfully');
      });
  };

  const cancel = () => {
    console.log('cancel');
  };

  return (
    <div className='container' style={{ padding: '100px' }}>
      <h2 className='text-center'>Add Blog</h2>
      <div className='card' style={{ padding: '50px' }}>
        <form className='container' style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
          <input onChange={(e) => setUserId(e.target.value)} value={userId} name='userId' className='form-control' placeholder='UserId...'></input>
          <input onChange={(e) => setEmail(e.target.value)} value={email} name='emailId' type='email' className='form-control' placeholder='Email...'></input>
          <input onChange={(e) => setTitle(e.target.value)} value={title} name='title' type='text' className='form-control' placeholder='Title...'></input>
          <textarea onChange={(e) => setContent(e.target.value)} value={content} name='content' style={{ height: '300px' }} placeholder='Content...' className='form-control' rows='3'></textarea>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
            <div className='row'>
              <Link to='/blogs' onClick={saveBlog} className='btn btn-primary w-90'>
                Save & Send Email
              </Link>
            </div>
            <div className='row'>
              <Link to='/blogs' onClick={cancel} className='btn btn-danger w-70'>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogComponent;
