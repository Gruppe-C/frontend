import httpClient from "@/services/httpClient";

const fileService = {
  async getList(groupId, yearId, subjectId) {
    return await httpClient.get(this.getEndpoint(groupId, yearId, subjectId));
  },
  async get(groupId, yearId, subjectId, id) {
    return await httpClient.get(this.getEndpoint(groupId, yearId, subjectId) + `/${id}`);
  },
  async upload(groupId, yearId, subjectId, file) {
    const formData = new FormData()
    formData.append('file', file)
    return await httpClient.post(this.getEndpoint(groupId, yearId, subjectId), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  async update(groupId, yearId, subjectId, id, data) {
    return await httpClient.put(this.getEndpoint(groupId, yearId, subjectId) + `/${id}`, data)
  },
  getEndpoint(groupId, yearId, subjectId) {
    return `/group/${groupId}/school-year/${yearId}/subject/${subjectId}/file`;
  }
}
export default fileService
