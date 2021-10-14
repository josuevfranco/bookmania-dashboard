import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import React
 from "react";
import Main from "./components/main/Main";
const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [lastUser, setLastUser] = useState([]);
  const [lastBook, setLastBook] = useState([]);
  
  //Cuando se cargue nuestra página muestre total de libros
  useEffect(() => {
    const getBooks = () => {
      //Le pasamos la URL del Sitio que va a realizar la consulta
      fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(res=> setBooks(res[0].total))
    }

    const getUsers = () => {
      fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(res=> setUsers(res[0].usuarios))   
    }

    const getLastuser = () => {
      fetch('http://localhost:3001/api/last')
      .then(res => res.json())
      .then(res=> setLastUser(res[0].name))   
    }

    const getLastBook = () => {
      fetch('http://localhost:3001/api/producto')
      .then(res => res.json())
      .then(res=> setLastBook(res[0].title))   
    }

    getBooks()
    getUsers()
    getLastuser()
    getLastBook()
  }, [])

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar  = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <Main books={books} users={users} lastUser={lastUser} lastBook={lastBook}/>
      
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>

  );
}

export default App;
