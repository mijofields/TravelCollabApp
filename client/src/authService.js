import decode from 'jwt-decode';

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:3000'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(username, password) {
    return this.fetch(`${this.domain}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    }).then((res) => {
      this.setToken(res.token); // Setting the token in LocalStorage
      return Promise.resolve(res)
    })
  }
  loggedIn() {
    // Checks to see if there is a saved token and that its valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired;
  }
  setToken(idToken) {
    localStorage.setItem("id_Token", idToken)
  }

  getToken() {
    // Get the token from localStorage
    return localStorage.getItem("id_token");
  }
  logout() {
    localStorage.removeItem('id_token');
  }
  isTokenExpired(token) {
    try {
      // There is currently no expiration on the token but I am trying
      // this example anyway.
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  getProfile() {
    // Using jwt-decode package to decode the token
    return decode(this.getToken());
  }
  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    // Setting authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    headers['Authorization'] = `Bearer ${this.getToken()}`;

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then((res) => res.json())
  }
  _checkStatus(response) {
    // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
  }
}
