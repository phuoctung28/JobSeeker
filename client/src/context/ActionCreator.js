import JobAPI from "../services/job";
import { FETCH_JOB, FETCH_JOB_ERROR } from "./type";
// const reducer = (state, action)
export const loadAllJob = async () => {
  try {
    return await JobAPI.loadJob();
  } catch (error) {
    console.log(error);
  }
};
