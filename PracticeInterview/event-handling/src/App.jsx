import {createContext} from 'react'

import './App.css'
import ChildA from './components/ChildA'


const UserContext = createContext();

function App() {

  return (
    <>
    <UserContext.Provider>
      <ChildA />
    </UserContext.Provider>
    </>
  )
}

export default App
