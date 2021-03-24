import {
    JOB_VACANCIES_LIST_REQUEST_SUCCESS,
} from "../action_types/index"
const initialstate = {
    jobVacanciesList: [],
};

export const jobVacancyReducer = (status = initialstate, action) => {
  switch (action.type) {
    case JOB_VACANCIES_LIST_REQUEST_SUCCESS:
      return {
        ...status,
        jobVacanciesList: action.response,
      }

    default:
      return status
  }
}
