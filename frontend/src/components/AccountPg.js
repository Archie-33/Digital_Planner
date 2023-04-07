import React, { useEffect, useState } from "react"
import "./AccountPg.css"

const AccountPg = () => {
    
    const url = "http://localhost:5000";
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [accountArray, setAccountArray] = useState([]);
    const getAccount = () => {
        fetch("http://localhost:5000/user/getbyid/"+currentUser._id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // notes: noteText,
          }),
        }).then(res => {
            refreshUser();
        })
      }



    const refreshUser = () => {
        fetch(url + "/user/getbyid/"+currentUser._id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCurrentUser(data);
            sessionStorage.setItem('user', JSON.stringify(data));
          })
      }
    
    return (
        <div className='body2'>
        <div className='container1  emp-profile'>
            <form method=''>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='profile-img'>
                        <img src='avatar2.jpg' alt='profile_pic'></img>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='profile-head'>
                            <h4>ACCOUNT PAGE</h4>
                            <h6>Euphoriaque Digital Planner</h6>

                            <ul className='nav nav-tabs' role='tablist'>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>Timeline</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-7 pl-5 account-info'>
                        <div className='tab-content profile-tab' id='myTabContent'>
                            <div className='tab-content profile-tab' id='home' role='tabpanel' aria-labelledby='home-tab'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>User Id</label>
                                        <label>Name</label>
                                        <label>Age</label>
                                        <label>Phone Number</label>
                                        <label>E-mail</label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>{currentUser._id}</p>
                                        <p>{currentUser._name}</p>
                                        <p>{currentUser._age}</p>
                                        <p>{currentUser._mobile}</p>
                                        <p>{currentUser._email}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div className='col-md-1'>
                        <input type='submit' className='profile-edit-btn' name="btnAddMore" value="Edit Profile"></input>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='col-md-5'>
                        <div className='under-pic'>
                            <h5>PROFILE PIC</h5>
                            <div class="topic"><h6>Address</h6></div>
                            <div class="text-one">Lucknow, 226012</div>
                            <div class="text-two">Aashiyana Colony, near Aalambagh</div>
                        </div>
                    </div>
                    <div className='col-md-7 pl-5 account-info'>
                        <div className='tab-content profile-tab' id='myTabContent'>

                        </div>
                    </div>
                </div> */}
            </form>
        </div>
        </div>

    )
}
export default AccountPg;