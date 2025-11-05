import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import QuizPage from './pages/QuizPage';

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/upload" element={<UploadPage />} />
<Route path="/quiz" element={<QuizPage />} />
</Routes>
</BrowserRouter>
);
}


export default App;