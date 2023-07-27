import React from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import StudentRoute from './routes/student'
import AdminRoute from './routes/admin'
import AdvisorRoute from './routes/advisor'
import ReviewerRoute from './routes/reviewer'


function App() {
  return (
    
      
     <BrowserRouter>
      <Routes>
        <Route path='/admin/*' element={<AdminRoute/>} />
        <Route path='/reviewer/*' element={<ReviewerRoute/>} />
        <Route path='/advisor/*' element={<AdvisorRoute/>} />
        <Route path='/*' element={<StudentRoute/>} />

      </Routes>
     </BrowserRouter>
  
  )
}

export default App
