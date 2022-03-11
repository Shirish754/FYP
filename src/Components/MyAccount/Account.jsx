import React from 'react'

export default function Account() {
  return (
    <section className='p-5'>
      <div className='mt-5'>
        <div className='border border-black m-5 d-flex flex-column justify-content-center'>
          <h2 className='d-flex justify-content-center border-bottom p-2'>Account details</h2>
          <div className='d-flex justify-content-center '>
            <div className='d-flex flex-column col-3 justify-content-center align-items-center me-5 '>
               <img className="p-1 rounded-circle pt-2" style={{ height:"30vh"}} src={`https://ui-avatars.com/api/?background=000000&color=ffffff&name=${JSON.parse(localStorage.getItem('hamrovet-token')).userName}`}/>
               <div className='p-2'><h3>{JSON.parse(localStorage.getItem('hamrovet-token')).userName }</h3></div>
            </div>
            <div className='d-flex flex-column col-6 p-4 ms-5 '>
              <h3 className='d-flex justify-content-center'>My Account</h3>
              <div className='d-flex flex-column'>
                <form className='p-2 -3'>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-9">
                      <input type="email" class="form-control m-1" id="inputEmail3" placeholder="Email"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label ">User&nbsp;Name:</label>
                    <div class="col-sm-9">
                      <input type="password" class="form-control m-1" id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Address:</label>
                    <div class="col-sm-9">
                      <input type="password" class="form-control m-1 " id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Contact:</label>
                    <div class="col-sm-9">
                      <input type="password" class="form-control m-1" id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>
                  

                  <div class="form-group row">
                    <div class="col-sm-10 d-flex align-items-center justify-content-center">
                      <button type="submit" class="btn btn-primary m-2">Edit Account</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='border border-black m-5 '>
          <div>
            <h3 className='d-flex justify-content-center border-bottom p-2'>Change Password</h3>
            <div className='d-flex justify-content-center '>
            <div className='d-flex  flex-column justify-content-center align-items-center col-9'>
            <form className=''>

                  <div class="form-group row ">
                    <label for="inputEmail3" class=" col-sm-2 col-form-label">Old&nbsp;Password</label>
                    <div class="">
                      <input type="email" class="form-control m-1" id="inputEmail3" placeholder="********"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class=" col-form-label">New&nbsp;Password</label>
                    <div class="">
                      <input type="password" class="form-control m-1" id="inputPassword3" placeholder="********"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword3" class=" col-form-label">Confirm&nbsp;Password</label>
                    <div class="">
                      <input type="password" class="form-control m-1" id="inputPassword3" placeholder="********"/>
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-danger m-3 ">Change&nbsp;Password</button>
                    </div>
                  </div>
                </form>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center me-5 '><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11pBtRlRTJa82iHXBdeTM5bI_ha6auFhdNg&usqp=CAU" alt="change password image"/></div>
            </div>
            
          </div>
          </div>
          

      </div>
    </section>
  )
}
