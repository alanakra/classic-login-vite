// TODO: Redirect to profile if im already logged in
import { API_URL } from "./main"
const loginForm = document.getElementById('loginForm')

function showResult(message, type = 'info') {
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = `<div class="result ${type}">${message}</div>`
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
    if (!username || !password) {
        showResult('Please fill in all fields', 'error')
        return
    }
    
    try {
        const formData = new FormData()
        formData.append('uname', username)
        formData.append('upassword', password)
        
        const response = await fetch(`${API_URL}/login.php`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
        
        const data = await response.json()
        
        if (data.success) {
            showResult(`Login successful! Welcome ${data.user.username}`, 'success')
            // TODO: Show User Options (profile page, logout, etc.)
        } else {
            showResult(`Error: ${data.error}`, 'error')
        }
    } catch (error) {
        showResult(`Connection error: ${error.message}`, 'error')
    }
})