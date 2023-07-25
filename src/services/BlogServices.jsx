import axios from "axios";
const BLOGS_API_BASE_URL="http://localhost:8080/blogs";


    const getBlogs=()=>
    {
        return axios.get(BLOGS_API_BASE_URL);
    }

    const addBlogs=(blog)=>
    {
        return axios.post(BLOGS_API_BASE_URL,blog);
    }

    const getBlogsByUserId=(userId)=>{
        return axios.get(`${BLOGS_API_BASE_URL}/userId/${userId}`);
      }

      const BlogServices={
        getBlogs,
        addBlogs,
        getBlogsByUserId
      };

export default BlogServices;