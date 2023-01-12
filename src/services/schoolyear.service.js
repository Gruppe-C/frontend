import httpClient from "@/services/httpClient";

const schoolYearService = {
  async getList(groupId) {
    return await httpClient.get(this.getEndpoint(groupId));
  },
  async get(groupId, id) {
    return await httpClient.get(this.getEndpoint(groupId) + `/${id}`);
  },
  async create(groupId, data) {
    return await httpClient.post(this.getEndpoint(groupId), data)
  },
  async update(groupId, id, data) {
    return await httpClient.put(this.getEndpoint(groupId) + `/${id}`, data)
  },
  getEndpoint(groupId) {
    return `/group/${groupId}/school-year`
  }
}
export default schoolYearService
