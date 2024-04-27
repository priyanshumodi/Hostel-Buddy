import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Assuming App.jsx is your main application component
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Using BrowserRouter for standard web routing
import Layout from './Layout.jsx'; // Import your layout component
import { Home, About, Contact, Room, Services, Login, Signup } from './components/index.js'; // Assuming components are exported properly
import RoomBook from './components/Room/RoomBook.jsx';
import Book from './components/Room/Book.jsx';
import AdminLayout from './AdminLayout.jsx';
import Admin from './components/Admin/Admin.jsx';
import Message from './components/Admin/Message.jsx';

// Improved routing configuration:
const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Home route at exact path '/' */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="room">
        <Route index element={<Room />} /> {/* Room route at exact path '/room' */}
        <Route path="roomBook" element={<RoomBook />} /> {/* Nested route for booking */}
      </Route>
      <Route path="services" element={<Services />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="book" element={<Book />} /> {/* Assuming Book component is for general booking, adjust if needed */}
    </Route>
    <Route path='/admin' element={<AdminLayout/>}>
       <Route index element={<Admin/>}/>
       {/* <Route path='*' element={<Admin/>}/> //ese bhi likh sakte hai */}
       <Route path='messages' element={<Message/>} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>{routes}</Router> {/* Wrap routes with Router */}
  </React.StrictMode>
);
