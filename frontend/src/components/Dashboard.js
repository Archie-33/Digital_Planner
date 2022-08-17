import React from 'react'

const Dashboard = () => {

    const url = "http://localhost:5000";

    const addTodo = () => {
        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title : String,
    createdBy : "",
    createdAt : new Date()
            })

        })
    }

  return (
    <div className='main-bg p-4'>
        <div className="row" style={{minHeight : '93vh'}}>
            <div className="col-md-2">
                <div className="card">
                    <div className="card-body">
                        <img style={{borderRadius : '100px'}} className='d-block img-fluid w-50 m-auto' src='avatar2.jpg' alt="" />
                        <h5 className="card-title text-center m-0">User Name</h5>
                    </div>
                    <hr className='m-0' />
                    <div className="card-body">
                        <button className='btn btn-outline-primary w-100'> <i class="fas fa-home"></i> Home</button>
                    </div>
                </div>
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card top-card">
                            <div className="card-header">
                                <h4 className="m-0">
                                Today's Plan / ToDo List
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card top-card">
                            <div className="card-header">
                                <h4 className="m-0">
                                Today's Plan / ToDo List
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <div className="card top-card">
                            <div className="card-header">
                                <h4 className="m-0">
                                Today's Plan / ToDo List
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <h3 className="m-0">
                                Quote of the Day 
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bottom-card">
                            <div className="card-header">
                                <h4 className="m-0">
                                Today's Plan / ToDo List
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;