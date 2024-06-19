import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import './App.css'
import HeaderTools from './components/HeaderTools'
import IncidentsPage from './pages/IncidentsPage'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import IncidentFormPage from './pages/IncidentFormPage'
import ProtectedRoute from './ProtectedRoutes'
import ProfilePage from './pages/ProfilePage'
import SearchIncident from './pages/SearchIncident'
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main>
          <HeaderTools/>
          <Routes>
            {/*Rutas publicas*/}
            <Route path='/' element={<IncidentsPage/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/search' element={<SearchIncident/>}/>
            {/*Rutas privadas*/}
            <Route element={<ProtectedRoute/>}>
              <Route path='/add-incident' element={<IncidentFormPage/>}/>
              <Route path='/incident/:id' element={<IncidentFormPage/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
