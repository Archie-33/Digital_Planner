import TimeAgo from "javascript-time-ago"
import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"

const isWeekend = (date) => {
  const day = date.day()

  return day === 0 || day === 6
}

const Dashboard = () => {
  const [value, setValue] = React.useState(dayjs())
  const quotes = [
    "You can do anything, but not everything.",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
  ]

  const url = "http://localhost:5000"
  const [planText, setPlanText] = useState("")
  const [reminderText, setReminderText] = useState("")
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [noteText, setNoteText] = useState(currentUser.notes)

  const [planArray, setPlanArray] = useState([])
  const [reminderArray, setReminderArray] = useState([])

  const timeAgo = new TimeAgo("en-US")

  const addPlan = () => {
    fetch("http://localhost:5000/plan/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: planText,
        createdBy: currentUser._id,
        createdAt: new Date(),
      }),
    }).then((res) => {
      fetchPlans()
    })
  }
  const addReminder = () => {
    fetch("http://localhost:5000/reminder/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: reminderText,
        createdBy: currentUser._id,
        createdAt: new Date(),
      }),
    }).then((res) => {
      fetchReminder()
    })
  }

  const updateNote = () => {
    fetch("http://localhost:5000/user/update/" + currentUser._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notes: noteText,
      }),
    }).then((res) => {
      refreshUser()
    })
  }

  const fetchPlans = () => {
    fetch(url + "/plan/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPlanArray(data)
      })
  }
  const fetchReminder = () => {
    fetch(url + "/reminder/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReminderArray(data)
      })
  }

  const refreshUser = () => {
    fetch(url + "/user/getbyid/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCurrentUser(data)
        sessionStorage.setItem("user", JSON.stringify(data))
      })
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  const deleteTodo = (id) => {
    fetch(url + "/plan/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchPlans();
      })
  }
  const deleteReminder = (id) => {
    fetch(url + "/reminder/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchReminder();
      })
  }

  return (
    <div className="main-bg p-4">
      <div className="row" style={{ minHeight: "93vh" }}>
        <div className="col-md-2">
          <div className="card">
            <div className="card-body">
              <img style={{ borderRadius: "100px" }} className="d-block img-fluid w-50 m-auto" src="avatar2.jpg" alt="" />
              <h5 className="card-title text-center m-0">{currentUser.name}</h5>
            </div>
            <hr className="m-0" />
            <div className="card-body">
              <button className="btn btn-outline-primary w-100">
                {" "}
                <i class="fas fa-home"></i> Home
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <i></i> Account
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <i></i> Settings
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">Today's Plan / ToDo List</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                </div>
                <div className="card-body">
                  <div className="input-group">
                    <input onChange={(e) => setPlanText(e.target.value)} type="text" className="form-control" />
                    <button onClick={addPlan} className="btn btn-primary">
                      {" "}
                      <i class="fas fa-plus    "></i>{" "}
                    </button>
                  </div>
                  <div style={{ height: "20rem", overflow: "auto" }}>
                    <ul className="list-group mt-3">
                      {planArray.map((plan) => (
                        <li className="list-group-item d-flex justify-content-between">
                          <p className="m-0 fw-bold">{plan.title}</p>
                          <p className="m-0">{timeAgo.format(new Date(plan.createdAt))} 
                            &nbsp;&nbsp;&nbsp;<i class="fas fa-trash text-danger" 
                            onClick={e => deleteTodo(plan._id)}></i>
                           </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">Calender</h4>
                </div>
                <div className="card-body">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      sx={{ height: "100%" }}
                      orientation="landscape"
                      openTo="day"
                      label="Select Date"
                      value={value}
                      shouldDisableDate={isWeekend}
                      onChange={(newValue) => {
                        setValue(newValue)
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">Notes</h4>
                </div>
                <div className="card-body">
                  <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} className="form-control" rows="8"></textarea>
                  <button className="btn btn-primary float-end mt-3" onClick={updateNote}>
                    {" "}
                    <i class="fas fa-pen    "></i>{" "}
                  </button>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-body">
                  <h3 className="m-0">Quote of the Day</h3>
                  <h5>{quotes[Math.floor(Math.random() * quotes.length)]}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bottom-card">
                <div className="card-header">
                  <h4 className="m-0">Important Reminders</h4>
                </div>
                <div className="card-body">
                  <div className="input-group">
                    <input onChange={(e) => setReminderText(e.target.value)} type="text" className="form-control" />
                    <button onClick={addReminder} className="btn btn-primary">
                      {" "}
                      <i class="fas fa-plus    "></i>{" "}
                    </button>
                  </div>
                  <div style={{ height: "12rem", overflow: "auto" }}>
                    <ul className="list-group mt-3">
                      {reminderArray.map((reminder) => (
                        <li className="list-group-item d-flex justify-content-between">
                          <p className="m-0 fw-bold">{reminder.title}</p>
                          <p className="m-0">{timeAgo.format(new Date(reminder.createdAt))}
                          &nbsp;&nbsp;&nbsp;<i class="fas fa-trash text-danger" 
                            onClick={e => deleteReminder(reminder._id)}></i>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
