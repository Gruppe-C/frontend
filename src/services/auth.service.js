import httpClient from "@/services/httpClient";

const authService = {
  login: (username, password) => {
    return httpClient.post('/login', {
      username,
      password
    })
  },
  register: (username, password) => {
    return httpClient.post('/register', {
      username,
      password
    })
  }
}

export default authService
