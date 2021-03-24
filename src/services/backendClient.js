import axios from 'axios'

const promiseReject = value => new Promise((resolve, reject) => reject(value))

export const get = path => axios.get("https://api.rooster.jobs/" + path).then(response => response).catch(error => promiseReject(error))
