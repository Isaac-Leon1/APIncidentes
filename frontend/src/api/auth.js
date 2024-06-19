import api from './main'

export const loginRequest = user => api.post('/users/login', user)

export const registerRequest = user => api.post('/users/register', user)

export const submitRequest = (data, token) => api.post('/incidents', data, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
    }
})