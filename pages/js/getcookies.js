const noLoggedLinks = document.getElementById('nologged-links')
const loggedLinks = document.getElementById('logged-links')

function showGreetings(message) {
    const greetings = document.getElementById('greetings')
    greetings.innerHTML = `<h2>${message}</h2>`
}
function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    const user = getCookie("auth_token");
    if (user != "") {
        showGreetings(`Bonjour ${parseJWT(user)} !`);
        noLoggedLinks.classList.add('hidden');
        loggedLinks.classList.remove('hidden');
    }
}
function parseJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const parsedJSONPayload = JSON.parse(jsonPayload);
    console.debug(parsedJSONPayload);
    return parsedJSONPayload.username;
}
checkCookie()