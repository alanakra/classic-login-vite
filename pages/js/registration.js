const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const uname = document.getElementById('uname').value
    const upassword = document.getElementById('upassword').value
    const formData = new FormData()
    formData.append('uname', uname)
    formData.append('upassword', upassword)
    
    const response = await fetch('https://demo-register-server.local:8081/register.php', {
        method: 'POST',
        body: formData
    })
    const data = await response.text()
    
    const messageDiv = document.getElementById('message')
    if (response.ok) {
        messageDiv.textContent = data
        messageDiv.style.color = ''
    } else if (response.status === 400) {
        messageDiv.textContent = data
        messageDiv.style.color = 'red'
    } else {
        messageDiv.textContent = `Error: ${data}`
        messageDiv.style.color = ''
    }
})