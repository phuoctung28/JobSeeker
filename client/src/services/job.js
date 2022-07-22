import axiosInstance from "./axiosInstance";

const JobAPI = {
  loadJob:  () => axiosInstance.get("/job/"),
  loadCompany: () => axiosInstance.get("/company/"),
  loadCategory: () => axiosInstance.get("/jobCategory/"), //cors
  searchJob:  (id) => axiosInstance.get(`/job/${id}`),
  searchJobByTitle: (title) => axiosInstance.get(`job/search/${title}`), // title
  fetchCompanyJob: (id) => axiosInstance.get(`/job/company/${id}`),
  searchJobByCategory:  (categoryId) => axiosInstance.get(`/job/category/${categoryId}`),
  applyJob:  (formData) => axiosInstance.post("job/add/", formData),
  loadJobByCompany: (id) => axiosInstance.get(`/job/company/${id}`),
}

export default JobAPI;