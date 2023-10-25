import './PlayButton.css'
import { useContext, useState } from 'react';
import ThemeContext from './context/ThemeContext';

function PlayButton({children,name,onPlay, onPause}) {
  console.log('render PlayButton')
  const theme = useContext(ThemeContext)
  
    const [playing, setPlaying] = useState(false);
    function playclick(e){
        // console.log(e)
        e.stopPropagation()



        if(playing) onPause()
        else onPlay()

        setPlaying(!playing);
    }

  return <button className={theme} onClick={playclick}>{children} : {playing?'⏸️':'▶️'}</button>;
}

export default PlayButton;
