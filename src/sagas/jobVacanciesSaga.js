import {
  JOB_VACANCIES_LIST_REQUEST,
  JOB_VACANCIES_LIST_REQUEST_FAIL,
  JOB_VACANCIES_LIST_REQUEST_SUCCESS,
} from "../action_types/index"
import { put, takeLatest } from "redux-saga/effects"
import { getJobVacancies } from "../services/jobFilterService"

export function* watcherJobVacanciesList() {
  yield takeLatest(JOB_VACANCIES_LIST_REQUEST, workerJobVacanciesListSaga)
}

function* workerJobVacanciesListSaga() {
  const result = yield getJobVacancies()
  console.log(result)
  if (result && result.status === 200) {
    yield put({ type: JOB_VACANCIES_LIST_REQUEST_SUCCESS , response: result.data.body.results })

  } else if (result.data.statusCode === 201) {
    yield put({ type: JOB_VACANCIES_LIST_REQUEST_FAIL })
 
  }
}
