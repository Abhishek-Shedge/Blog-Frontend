import './App.css';
import ListBlogComponent from './components/ListBlogComponents';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import CreateBlogComponent from './components/createBlogComponent';
import UserBlogComponent from './components/userBlogComponent';

function App() {
  return (
    <div>
        <Router>
          <div className='container'>
              <div className='container'>
                <Routes>
                  <Route path="/" element={<ListBlogComponent/>}/>
                  <Route path="/blogs" element={<ListBlogComponent/>}/>
                  <Route path="/add-blog" element={<CreateBlogComponent/>}/>
                  <Route path='/user-blog/:userId' element={<UserBlogComponent />} />
                </Routes>
              </div>
          </div>
        </Router>
    </div>
  );
}

export default App;