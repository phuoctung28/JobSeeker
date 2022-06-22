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

export const loadAllCompany = async () => {
  try {
    return await JobAPI.loadCompany();
  } catch (error) {
    console.log(error);
  }
}

export const loadAllCategory = async () => {
  try {
    return await JobAPI.loadCategory();
  } catch (error) {
    console.log(error);
  }
}