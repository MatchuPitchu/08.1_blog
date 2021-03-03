import {useState, useEffect} from 'react';
import {client} from './client';
import Blogpost from './Components/Blogpost';
import './App.css';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

useEffect(() => {
    client.getEntries({ content_type: 'blogPost' })
        .then((response) => {
            console.log(response)
            setBlogPosts(response.items)
        })
        .catch(console.error)
}, []);
console.log(process);

  return (
    <div className="App">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span className='logo'>React and Contentful</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Blogpost />
                        </div>
                    </main>
                </div>
            </div>
  );
}

export default App;
