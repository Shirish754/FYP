import React from 'react'

export default function Account() {
  return (
    <section className='p-5'>
      <div className='mt-5'>
        <div className='border border-black'>
          <h3>Account details</h3>
          <div className='d-flex'>
            <div className=''>
               <img className="p-1 rounded-circle w-25" src={`https://ui-avatars.com/api/?background=ffffff&color=000000&name=${JSON.parse(localStorage.getItem('hamrovet-token')).userName}`}/>
               {JSON.parse(localStorage.getItem('hamrovet-token')).userName }
            </div>
            <div className=''>
              <h3>My Account</h3>
              <div>
                <ul>
                  <li>First Name: <input></input></li>
                  <li>Last Name: <input></input></li>
                  <li>Address: <input></input></li>
                  <li>Email: <input></input></li>
                  <li>Contact: <input></input></li>
                </ul>
                <button className='btn-primary'>Edit Account</button>
              </div>
            </div>
          </div>
        </div>

        <div className='border border-black m-4'>
          <h3>Change Password</h3>
          <div>
            <ul>
              <li>Current Password:<input></input></li>
              <li>New Password:<input></input></li>
              <li>Confirm Password:<input></input></li>
            </ul>
            <button className='btn-danger'>Change Password</button>
          </div>
        </div>

      </div>
    </section>
  )
}
