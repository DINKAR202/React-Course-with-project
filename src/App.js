import { useContext, useReducer, useState } from "react";
import "./App.css";
import videoDB from "./components/data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContext";
import Hook from "./components/Hook";
import Login_page from "./components/Login_page";
import UseEffect1 from "./components/UseEffect1";

function App() {
  console.log("render App");
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  const themeContext = useContext(ThemeContext);


  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
    // console.log(id)
  }

  return (
    // <ThemeContext></ThemeContext>
    <>
    <div className={`App ${themeContext}`} onClick={() => console.log("App is clicked success")}>
      <AddVideo
        dispatch={dispatch}
        editableVideo={editableVideo}
      ></AddVideo>
      <h1>Videos</h1>
      <VideoList
        dispatch={dispatch}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>

    </div>
      {/* <Hook/> */}
      <Login_page />
      <UseEffect1 />
    </>
  );
}

export default App;
