import {createContext, useState} from 'react'

import './App.css'
import ChildA from './components/ChildA'


const UserContext = createContext();

function App() {
  const [user, setUser] = useState({user:"Dinkar"});

  return (
    <>
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
    </>
  )
}

export default App
