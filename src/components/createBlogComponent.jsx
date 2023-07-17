import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import BlogServices from '../services/BlogServices';

class CreateBlogComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            userId:'',
            title:'',
            content:'',
        }

        this.changeTitleHandler=this.changeTitleHandler.bind(this);
        this.changeContentHandler=this.changeContentHandler.bind(this);
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.saveBlog=this.saveBlog.bind(this);
    }

    saveBlog()
    {
        let blog={userId: this.state.userId, title: this.state.title, content: this.state.content};
        console.log("Blogs=> "+JSON.stringify(blog));
        if(this.state.userId.length==0 || this.state.title.length==0 || this.state.content.length==0)
        {
             window.alert("Enter all the fields");
             return;
        }
        BlogServices.addBlogs(blog).then(res=>
            {
                window.alert("Blog added Successfully");
            });

    }

    cancel()
    {
        console.log("cancel");
    }

    changeTitleHandler=(event)=>
    {
        this.setState({title: event.target.value});
    }

    changeUserIdHandler=(event)=>{
        this.setState({userId: event.target.value});
    }

    changeContentHandler=(event)=>
    {
        this.setState({content: event.target.value}); 
    }

    render() {
        return (
            <div className='container' style={{padding:"100px"}}>
                <h2 className='text-center'>Add Blog</h2>
                <div className='card' style={{padding: "50px"}}>
                    <form className='container' style={{height: "500px", display: "flex", alignItems:"center", justifyContent:"space-between", flexDirection:"column"}}>
                            <input onChange={this.changeUserIdHandler} value={this.state.userId} name='userId' className="form-control" placeholder="UserId..."></input>
                            <input onChange={this.changeTitleHandler} value={this.state.title} name='title' type="text" className="form-control"  placeholder="Title..."></input>
                            <textarea onChange={this.changeContentHandler} value={this.state.content} name='content' style={{height: "300px"}} placeholder='Content...' className="form-control" rows="3"></textarea>
                            <div style={{display:'flex',justifyContent:"space-between", width: "150px"}}>
                            <div className='row'> 
                                <Link to='/blogs' onClick={this.saveBlog.bind(this)} className='btn btn-primary w-60'>Save</Link>
                            </div>
                            <div className='row'> 
                                <Link to='/blogs' onClick={this.cancel.bind(this)} className='btn btn-danger w-60'>Cancel</Link>
                            </div>
                            </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default CreateBlogComponent