import "moment-timezone"
import "./style_job_vacancy.css"
import Moment from "react-moment"
import { connect } from "react-redux"
import ModalImage from "react-modal-image"
import { fetchJobVacancies } from "../actions"
import WorkIcon from "@material-ui/icons/Work"
import PublicIcon from "@material-ui/icons/Public"
import React, { useState, useEffect } from "react"
import AccessTimeIcon from "@material-ui/icons/AccessTime"

const JobVacanciesList = (props) => {
  const [jobList, setJobList] = useState([])
  const handleShuffling = (e) => {
    e.preventDefault()
    props.JobVacancies()
    let lists = props.jobVacanciesList
    lists = lists.sort(() => Math.random() - 0.5)
    setJobList(lists)
  }
  useEffect(() => {
    props.JobVacancies()
  }, [])
  useEffect(() => {
    let list = props.jobVacanciesList
    list = list.sort(() => Math.random() - 0.5)
    setJobList(list)
  }, [props.jobVacanciesList])

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12'>
            <button
              className='btn btn_style text-center'
              onClick={(e) => handleShuffling(e)}>
              Shuffle
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        {jobList &&
          jobList.slice(0, 4).map((item, idx) => (
            <>
              <div key={item.id} className='mt-3 mb-2'>
                <div className='row box_style'>
                  <div
                    className='col-md-4'
                    style={{
                      width: "100px",
                      height: "100px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    }}>
                    {
                      <ModalImage
                        small={item.company.logo_url}
                        large={item.company.logo_url}
                      />
                    }
                  </div>
                  <div className='col-md-6'>
                    <h3>{item.title}</h3>
                    <h4>{item.company.name}</h4>
                    <h5>{item.company.industry}</h5>
                    <h5>
                      <WorkIcon />
                      {item.job_type} <PublicIcon /> {item.location}
                    </h5>
                  </div>
                  <div className='col-md-2'>
                    <AccessTimeIcon />
                    <Moment fromNow>{item.created_at}</Moment>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  )
}

const mapStateToProps = ({ jobList }) => ({
  jobVacanciesList: jobList.jobVacanciesList,
})
const mapDispatchToProps = (dispatch) => {
  return {
    JobVacancies: (data) => dispatch(fetchJobVacancies(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobVacanciesList)
