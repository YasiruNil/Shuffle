import { combineReducers } from "redux"
import { jobVacancyReducer as jobList } from "./jobVacanciesReducer"

const rootReducer = combineReducers({
  jobList,
})
export default rootReducer
