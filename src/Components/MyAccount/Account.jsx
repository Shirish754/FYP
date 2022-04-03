import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AccountPop from './AccountPop';
import ChangePasswordPop from './ChangePasswordPop';
import { baseUrl } from "../baseUrl";

export default function Account(props) {
  const [isEmail, setisEmail]=useState();
  const [isUserName, setIsUserName]=useState();
  const [isContact, setisContact]=useState();
  const [isAddress, setisAddress]=useState();
  const [isPassword, setisPassword]=useState();
  const [isNewPassword,setIsNewPassword]=useState();
  const [isConfirmPassword, setisConfirmPassword]=useState();
  const [editAccount, setEditAccount]=useState(false);
  const [editPassword, setEditPassword]=useState(false);
  // '{"Customer_found":"true","customerId":"3","userName":"Shirish1","email":"shpokh499@gmail.com","contact":"9824133994","address":"Ratnachowk-7, Pokhara","join date":"1644819735"}'


  useEffect(()=>{
    var acc= JSON.parse(localStorage.getItem('hamrovet-token'));
    setisEmail(acc.email);
    setIsUserName(acc.userName);
    setisContact(acc.contact);
    setisAddress(acc.address);
  },[])

  const editUserAccount = async(e) => {
    e.preventDefault();
    
  fetch(baseUrl+'user/editaccount.php',{
    method: 'POST',
    body: JSON.stringify({
      "customerId":JSON.parse(localStorage.getItem('hamrovet-token')).customerId,
    "newEmail":isEmail,
    "newUserName":isUserName,
    "newAddress":isAddress,
    "newContact":isContact
    })
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
      if (res.updated === 'true') {
        alert('Profile updated successfully!');
        localStorage.setItem('hamrovet-token',JSON.stringify(res))
        
        window.location.reload();
    }
    else {
        alert('Something went wrong!');
    }
  })
  .catch(e => {
    alert('Something went wrong!');
  })
  }


  const changePassword = async()=>{

    // var formData = new FormData();

    // formData.append('oldPassword',isPassword);
    // formData.append('newPassword',isNewPassword);
    // formData.append('customerId',JSON.parse(localStorage.getItem('hamrovet-token')).customerId);

    await fetch(baseUrl+'user/changePassword.php',{
      method:"POST",
      body:JSON.stringify({'oldPassword':isPassword,'newPassword':isNewPassword,'customerId':JSON.parse(localStorage.getItem('hamrovet-token')).customerId})
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.updated==='true'){
        setIsNewPassword("");
        setisConfirmPassword("");
        setisPassword("");
        setEditPassword(false);
          alert('Password Changed Successfully');
      }else{
        alert('Something went wrong');
      }
    })
    .catch((e)=>console.log(e.message));
  }

  return (
    <div>
      {/* <div style={{height:"60px",width:"100%", backgroundColor:"#000000"}}></div> */}
      <div style={{ overflowX: "hidden" }}>
                    <div
                        className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white"
                        style={{
                            height: "35vh",
                            width: "100vw",
                            position:"relative",
                            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 10%, rgba(50, 51, 51, 0.6) 86%, rgba(51, 51, 25, 0.8) 100%),url("https://images.pexels.com/photos/8673633/pexels-photo-8673633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")',
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}>
                        <div className="text-center">
                            <h1 className="small"><Link className="text-decoration-none text-white" to="/">Home </Link> /My Account</h1>
                        </div>
                        
                    </div>
                </div>
    <section className='p-5'>
      
      <div className='mt-5'>
        <div className='border border-black d-flex flex-wrap flex-column justify-content-center'>
          <h2 className='d-flex flex-wrap justify-content-around border-bottom p-2'>Account details</h2>
          <div className='d-flex flex-wrap justify-content-around align-items-center '>
            <div className='d-flex flex-column flex-wrap justify-content-center align-items-center col-sm-6 col-md-6 col-lg-6'>
               <img className="p-1 rounded-circle pt-2" style={{height:"30vh"}}src={`https://ui-avatars.com/api/?background=000000&color=ffffff&name=${JSON.parse(localStorage.getItem('hamrovet-token')).userName}`}/>
               <div className='p-2'><h3>{JSON.parse(localStorage.getItem('hamrovet-token')).userName }</h3></div>
            </div>
            <div className='d-flex flex-column p-4 col col-sm-7 col-md-6 col-lg-6'>
              <h3 className='d-flex justify-content-center col-12 '>My Account</h3>
              <div className='d-flex flex-column'>
                <form onSubmit={editUserAccount} className='p-2'>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                      <input 
                      value={isEmail} onChange={(e) => { setisEmail(e.target.value) }} type="email"
                       class="form-control m-1" id="inputEmail3" placeholder="Email"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label ">User&nbsp;Name:</label>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                      <input 
                      required value={isUserName} onChange={(e) => { setIsUserName(e.target.value) }} 
                      type="text"  class="form-control m-1" id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Address:</label>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                      <input 
                      required value={isAddress} onChange={(e) => { setisAddress(e.target.value) }} 
                      type="text" class="form-control m-1 " id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Contact:</label>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                      <input 
                      required value={isContact} onChange={(e) => { setisContact(e.target.value) }}
                       type="text" class="form-control m-1" id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>
                  

                  <div class="form-group row">
                    <div class="col-sm-10 d-flex align-items-center justify-content-center">
                      <button type="button" class="btn btn-primary m-2" onClick={()=>{setEditAccount(true)}}>Edit Account</button>
                      <AccountPop open={editAccount} onClose={() => { setEditAccount(false) }}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='border border-black mt-5'>
          <div>
            <h3 className='d-flex justify-content-center border-bottom p-2'>Change Password</h3>
            <div className='d-flex flex-wrap justify-content-around col'>

              <div className='d-flex  flex-column justify-content-center align-items-center col col-sm-7 col-md-12 col-lg-6'>
                <div className='col col-sm-12 col-md-12 col-lg-12 p-3 '>

                  
                      <div class="form-group row  d-flex justify-content-around">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Old&nbsp;Password</label>
                        <div class=" col-sm-12 col-md-9 col-lg-8">
                          <input value={isPassword} onChange={(e)=>{setisPassword(e.target.value);}} type="password" class="form-control m-1" id="inputEmail3" placeholder="********"/>
                        </div>
                      </div>

                      <div class="form-group row d-flex justify-content-around">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">New&nbsp;Password</label>
                        <div class="col-sm-12 col-md-9 col-lg-8">
                          <input value={isNewPassword} onChange={(e)=>{setIsNewPassword(e.target.value);}} type="password" class="form-control m-1" id="inputPassword3" placeholder="********"/>
                        </div>
                      </div>

                      <div class="form-group row d-flex justify-content-around">
                        <label for="inputPassword3" class=" col-sm-2 col-form-label">Confirm&nbsp;Password</label>
                        <div class="col-sm-12 col-md-9 col-lg-8">
                          <input value={isConfirmPassword} onChange={(e)=>{setisConfirmPassword(e.target.value);}} type="password" class="form-control m-1" id="inputPassword3" placeholder="********"/>
                        </div>
                      </div>

                      <div class="form-group row">
                        <div class="d-flex justify-content-center">
                          <button type="submit" class="btn btn-danger m-3 " onClick={()=>{setEditPassword(true)}}>Change&nbsp;Password</button>
                          <ChangePasswordPop changePassword={()=>{changePassword();}} open={editPassword} onClose={() => { setEditPassword(false)}} />
                        </div>
                      </div>
                    </div>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center me-5 p-3'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11pBtRlRTJa82iHXBdeTM5bI_ha6auFhdNg&usqp=CAU" alt="change password image"/></div>
            </div>
            
          </div>
          </div>
          

      </div>
    </section>
    </div>
    
  )
}
