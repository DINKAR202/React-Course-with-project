import { useContext } from "react";
import "./Video.css";
import ThemeContext from "./context/ThemeContext";

function Video({ title,id, channel, views, time, verified, children, dispatch, editVideo}) {
    // let verified = 'true'
    console.log('render Video');
    const theme = useContext(ThemeContext)
    
    let channelJSX;

    if(verified){
        channelJSX = <div className="channel">{channel} ✅</div>
    }
    else{
        channelJSX = <div className="channel">{channel}</div>
    }

  return (
    <>
      <div className="container">
        <button className="close" onClick={()=>dispatch({ type: "DELETE", payload: id })}>X</button>
        <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/260/150`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        {channelJSX}
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>
          {children}
          ,emrwsfdnkjew,
        </div>
      </div>
    </>
  );
}

export default Video;
