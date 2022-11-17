import httpClient from "@/services/httpClient";

const END_POINT = '/group'

const groupService = {
  async getList() {
    return await httpClient.get(`${END_POINT}`)
  },
  async get(id) {
    return await httpClient.get(`${END_POINT}/${id}`)
  },
  async create(group) {
    return await httpClient.post(`${END_POINT}`, group)
  },
  async update(group) {
    return await httpClient.put(`${END_POINT}/${group.id}`, group)
  }
}
export default groupService
