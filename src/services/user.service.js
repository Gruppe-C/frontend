import httpClient from "@/services/httpClient";

const END_POINT = '/user'

const userService = {
  async getList () {
    return await httpClient.get(`${END_POINT}`)
  },
  async get (username) {
    return await httpClient.get(`${END_POINT}/${username}`)
  }
}

export default userService
