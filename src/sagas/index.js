import { all, fork } from "redux-saga/effects"
import { watcherJobVacanciesList as JobVacanciesList } from "./jobVacanciesSaga"

export default function* rootSaga() {
  yield all([fork(JobVacanciesList)])
}
