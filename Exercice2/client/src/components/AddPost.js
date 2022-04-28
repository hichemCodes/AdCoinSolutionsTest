
import { useState } from 'react';
import axios from "axios";

const AddPost = () => {

    const [title,setTitle] = useState("");
    const [description	,setDescription	] = useState("");
    

    const addPost =  async(e) => {
        e.preventDefault();

        const data = {
            title: title,
            description: description
        }
    console.log(data);
    const options = {
        headers: {"content-type": "application/json"}
    }
    axios.post('http://localhost:3001/api/post',data,options)
    .then(res=> {
        console.log('succes');  
        alert("Post créé avec succès");
        document.location.reload();

    });

    }
    

    return (
        <div className='mt-10'>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" onSubmit={addPost}>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Titre
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title" id="username" type="text" placeholder="Titre du post"  onChange={e => setTitle(e.target.value)}/>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Description
                </label>
                <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  name="description" type="text" placeholder="Description du post"  onChange={e => setDescription(e.target.value)}/>
                </div>
                <div class="flex items-center justify-between">
                    <input value="Ajouter" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                        
                </div>
            </form>
        </div>
    );
}

export default AddPost;