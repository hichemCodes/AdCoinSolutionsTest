import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {

    const [post,setPost] = useState([]);
    const [comments,setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        
        //get the post
        axios.get(`http://localhost:3001/api/posts/${id}`).then(res=> {
            setPost(res.data)
        });
        //get comments of post :id
        axios.get(`http://localhost:3001/api/posts/${id}/comments`).then(res=> {
            setComments(res.data)
        });

    }, []);

    return (
        <div className='blog post-page'>
              
               <Nav />
               
               <div className="post-info">

                {
                    post.map( p => {
                        return (
                            
                            <div class="max-w-sm rounded overflow-hidden shadow-lg post">
                                <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">{p.title}</div>
                                    <p class="text-gray-700 text-base">
                                    {p.description}
                                    </p>
                                    <h5>Comments : </h5>
                                    {
                                        comments.map( comment => {
                                            return (
                                                <div>
                                                    <span className='text-gray-700 text-base'>{comment.comment}</span>
                                                </div>

                                            )
                                        } )
                                    }

                                </div>
                            
                            </div>
                        );
                    })
                }     

               </div>

               

        </div>
    );
}

export default Post;