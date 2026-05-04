import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Register from './pages/register/Register';

// כאן נוכל להוסיף בעתיד קומפוננטת Navbar שתופיע בכל הדפים
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <Navbar /> -- מקום עתידי לתפריט ניווט */}
      
      <Routes>
        {/* דף ברירת המחדל - מפנה להרשמה כרגע */}
        <Route path="/" element={<Navigate to="/register" />} />
        
        {/* ה-Route של דף ההרשמה */}
        <Route path="/register" element={<Register />} />
        
        {/* כאן תוסיפי Routes נוספים בהמשך, למשל:
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} /> 
        */}

        {/* דף 404 - תפיסת נתיבים לא קיימים */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;