import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Footer/>
            
        </div>
    )
}




export default App