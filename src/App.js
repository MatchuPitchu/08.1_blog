import { useState, useEffect } from 'react';
import { client } from './client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// unique id
import { uuid } from 'uuidv4';
// import my fontawesome library
import './fontawesome';
import Navbar from './Components/Navbar';
import HeaderImg from './Components/HeaderImg';
import Blogger from './Components/Blogger';
import BlogPosts from './Components/BlogPosts';

function App() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [blogger, setBlogger] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                console.log(response.items);
                setBlogPosts(response.items);
            })
            .catch(console.error)
    }, []);
    console.log(process);

    useEffect(() => {
        client.getEntries({ content_type: 'author' })
            .then((response) => {
                console.log(response.items);
                setBlogger(response.items);
            })
            .catch(console.error)
    }, []);
    console.log(process);
    
    return (
    <>
        <Navbar />
        <HeaderImg />
        <main className="container mt-5">
            <h2>Here we are - the blogger</h2>
            <div className="row">
            {blogger && blogger.map(author => {
                return (
                    <Blogger key={uuid()} author={author}/>
                    )
                })
            }
            </div>
            <h2 className="mt-5">The latest articles</h2>
            <div className="row">
                <BlogPosts posts={blogPosts} />
                </div>
        </main>
    </>
    );
}

export default App;
