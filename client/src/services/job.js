import axiosInstance from "./axiosInstance";

const JobAPI = {
  loadJob: () => axiosInstance.get("/job/"),
  loadCompany: () => axiosInstance.get("/company/"),
  loadCategory: () => axiosInstance.get("/jobCategory/"), //cors
  searchJob: (id) => axiosInstance.get(`/job/${id}`),
  searchJobByTitle: (title) => axiosInstance.get(`job/search/${title}`), // title
  fetchCompanyJob: (id) => axiosInstance.get(`/job/company/${id}`),
  searchJobByCategory: (categoryId) =>
    axiosInstance.get(`/job/category/${categoryId}`),
  applyJob: (formData) => axiosInstance.post("job/add/", formData),
  loadJobByCompany: (id) => axiosInstance.get(`/job/company/${id}`),
  uploadCV: (email, cvFile) =>
    axiosInstance.put(`/applicant/cv/${email}`, cvFile),
  getApplication: (email) =>
    axiosInstance.get(`/application/applicant/${email}`),
  updateApplication: (id, data) =>
    axiosInstance.put(`/application/update/${id}`, data),
  createApplicant: (email) => axiosInstance.post(`/applicant/google/${email}`),
  fetchApplicant: (email) => axiosInstance.get(`applicant/google/${email}`),
  addApplication: (id, formData) =>
    axiosInstance.post(`/application/add/${id}`, formData),
};

export default JobAPI;
