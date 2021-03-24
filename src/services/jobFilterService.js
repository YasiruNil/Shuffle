import { get } from "./backendClient"

export const getJobVacancies = () => get("core/public/jobs")
