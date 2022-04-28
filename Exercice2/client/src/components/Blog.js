import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import axios from "axios";
import {Link} from "react-router-dom";


const Blog = () => {

    const [posts,setPosts] = useState([]);


    useEffect(() => {
        
        axios.get('http://localhost:3001/api/posts').then(res=> {
            setPosts(res.data)
        });
        

    }, []);

    return (
        <div className='blog'>
              <Nav />
              <h1 className='mt-5'></h1>
               <div className="posts">
                    {
                        posts.map( post => {
                            return (
                                
                                <Link to={`/blog/${post.id}`} >
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg post">
                                        <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2">{post.title}</div>
                                            <p class="text-gray-700 text-base">
                                            {post.description}
                                            </p>
                                        </div>
                                    
                                    </div>
                                </Link>

                            );
                        })
                    }
               </div>
               <Link to={`/blog/add`} >
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Ajouter Un Post
                    </button>
               </Link>
              

        </div>
    );
}

export default Blog;