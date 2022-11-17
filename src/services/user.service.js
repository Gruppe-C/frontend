import httpClient from "@/services/httpClient";

const END_POINT = '/user'

const userService = {
  async getList() {
    return await httpClient.get(`${END_POINT}`)
  },
  async get(username) {
    return await httpClient.get(`${END_POINT}/${username}`)
  },
  async changeDisplayName(displayName) {
    return await httpClient.put(`${END_POINT}`, {displayName})
  },
  async changeProfileImage(file) {
    const formData = new FormData()
    formData.append('file', file)
    return await httpClient.post(`${END_POINT}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
}

export default userService
