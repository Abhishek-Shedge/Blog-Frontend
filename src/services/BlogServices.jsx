import axios from "axios";
const BLOGS_API_BASE_URL="http://localhost:8080/blogs";


class BlogServices{
    getBlogs()
    {
        return axios.get(BLOGS_API_BASE_URL);
    }

    addBlogs(blog)
    {
        return axios.post(BLOGS_API_BASE_URL,blog);
    }

    getBlogsByUserId(userId) {
        return axios.get(`${BLOGS_API_BASE_URL}/userId/${userId}`);
      }
}
export default new BlogServices();