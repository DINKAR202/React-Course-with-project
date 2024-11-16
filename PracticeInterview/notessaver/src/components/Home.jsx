import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState();
  const [value, setValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toString(),
    };

    if(pasteId) {
      // update
      dispatch(updateToPastes(paste));
    }
    else{
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('')
    setSearchParams({})
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createPaste}>
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>

      <div>
        <textarea
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
