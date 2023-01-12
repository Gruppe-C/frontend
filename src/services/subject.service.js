import httpClient from "@/services/httpClient";

const subjectService = {
  async getList(groupId, yearId) {
    return await httpClient.get(this.getEndpoint(groupId, yearId));
  },
  async get(groupId, yearId, id) {
    return await httpClient.get(this.getEndpoint(groupId, yearId) + `/${id}`);
  },
  async create(groupId, yearId, data) {
    return await httpClient.post(this.getEndpoint(groupId, yearId), data)
  },
  async update(groupId, yearId, id, data) {
    return await httpClient.put(this.getEndpoint(groupId, yearId) + `/${id}`, data)
  },
  getEndpoint(groupId, yearId) {
    return `/group/${groupId}/school-year/${yearId}/subject`;
  }
}
export default subjectService
