import { useEffect, useState } from "react";
import "./AddVideo.css";

const initalState = {
    time: "1 year ago",
    channel: "Dinkar vlog",
    verified: "true",
    title:'',
    views:''
  }

function AddVideo({dispatch, editableVideo}) {
  const [video, setVideo] = useState(initalState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({type:'ADD',payload:video})  
    }
    
    setVideo(initalState)
  }
  function handleChange(e) {
    setVideo({...video, 
        [e.target.name]: e.target.value 
    });
    // console.log(video);
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
  },[editableVideo])

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
       {editableVideo?'Edit':'Add'} Video
      </button>
    </form>
  );
}

export default AddVideo;
