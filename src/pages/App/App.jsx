import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage'
import NotesListPage from '../NotesListPage/NotesListPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from "../../utilities/users-service";

export default function App() {
  
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={ <NotesListPage/> } />
          </Routes>   
        </>
        :
        <AuthPage setUser={setUser} />  
      }
    </main>
  );
}


