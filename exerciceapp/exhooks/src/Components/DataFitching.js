import React,{useState,useEffect}from 'react'
import axios from 'axios';
function DataFitching() {
    // const [posts,setPosts]=useState([]);
    const [id,setId]=useState(1);
    const [post,setPost]=useState({});
    const [idButton,setIdButton]=useState(1);
    const HandleClick=()=>{
        setIdButton(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`).then(res=>{
            console.log(res);
            setPost(res.data)
        }).catch(e=>{
            console.log(e);
        });
    },[idButton]);
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    //         console.log(res);
    //         setPosts(res.data)
    //     }).catch(e=>{
    //         console.log(e);
    //     });
    // },[]);
  return (
    <div>
        <input type="text" value={id}
        onChange={e=>{setId(e.target.value)}}/>
        <p>{post.title}</p>
        <button type="button" onClick={HandleClick}>Fetch Post </button>
        {/* <ul>
      {posts.map(post=><li key={post.id}>{post.title}</li>)}
      </ul> */}
    </div>
  )
}

export default DataFitching
