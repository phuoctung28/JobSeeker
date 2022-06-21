import axiosInstance from "./axiosInstance";

const JobAPI = {
  loadJob:  () => axiosInstance.get("/jobs/jobs"),
  searchJob:  (formaData) => axiosInstance.get("/job/:id", formaData),
  searchJobByCategory:  (category) => axiosInstance.get("/job/:category", category),
  applyJob:  (formData) => axiosInstance.post("job/add", formData)
}

export default JobAPI;