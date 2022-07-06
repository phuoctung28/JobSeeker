import axiosInstance from "./axiosInstance";

const JobAPI = {
  loadJob:  () => axiosInstance.get("/job"),
  loadCompany: () => axiosInstance.get("/company/"),
  loadCategory: () => axiosInstance.get("/jobCategory"), //cors
  searchJob:  (id) => axiosInstance.get(`/job/${id}`),
  searchJobByTitle: (title) => axiosInstance.get(`job/search/${title}`), // title
  searchJobByCategory:  (categoryId) => axiosInstance.get(`/job/category/${categoryId}`),
  applyJob:  (formData) => axiosInstance.post("job/add/", formData)
}

export default JobAPI;