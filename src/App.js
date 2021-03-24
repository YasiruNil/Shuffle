import { Switch, Route } from "react-router-dom"
import JobVacanciesList from "./compoments/jobVacanciesList"

function App() {
  return (
      <Switch>
        <Route exact path='/' component={JobVacanciesList} />
      </Switch>
  )
}

export default App
