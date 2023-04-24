// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ForLogo from './AdminPage/Images/AvanttecLogo.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function HomePage (){

  let [toggle1, setToggle1] = useState(true);

  const [value, setName] = useState({
   
    FirstName:"Surya",
    LastName:"Chandrasekaran",
    FullName:"P C Surya",
    MobileNumber:"896587485",
    Email:"pcsur@gmail.com",
    DOB:"12458777"



    });

    const first_name_update =() =>{
      var ChangeName = document.getElementById("fname_inp").value;

      setName (previousState =>
        {
        return{...previousState,FirstName: ChangeName}
      })

     document.getElementById('editing_records').style.visibility="hidden";
      
    }

    const last_name_update =() =>{
      var ChangeWorkName = document.getElementById("lname_inp").value
      setName (previousState =>{
        return{...previousState,LastName: ChangeWorkName}
      })

    }

    const full_name_update =() =>{
      var ChangeWorkName = document.getElementById("fullname_inp").value
      setName (previousState =>{
        return{...previousState,FullName: ChangeWorkName}
      })
    }

    const number_update =() =>{
      var ChangeWorkName = document.getElementById("number_inp").value
      setName (previousState =>{
        return{...previousState,MobileNumber: ChangeWorkName}
      })
    }

    const mail_update =() =>{
      var ChangeWorkName = document.getElementById("email_inp").value
      setName (previousState =>{
        return{...previousState,Email: ChangeWorkName}
      })
    }

  const dob_update =() =>{
    var ChangeWorkDob = document.getElementById("dob_inp").value
    setName (previousState =>{
      return{...previousState,DOB: ChangeWorkDob}
    })
  }


  
    function search_by_option(){
                                if(document.getElementById('Institute_Number_inp').checked == true)
                                {   
                                document.getElementById('disp').innerHTML ="Institute Number"
                                } 
                              else if (document.getElementById('email_inp').checked == true)
                               {  
                               document.getElementById('disp').innerHTML = "Email"
                               }
                  
                              else if (document.getElementById('phone_inp').checked == true)
                              {  
                              document.getElementById('disp').innerHTML = "Phone Number"
                                }
                                }
    function record_display(){
                         document.getElementById("table_content").style.visibility="visible";
                             } 
    function  edit_fname(){

                   document.getElementById("display_first_name").style.visibility="visible";
               }
      function  edit_lname(){

                document.getElementById("display_last_name").style.visibility="visible";
                        }
                                  
     return(<>

   {/* header starts */}

   <div className='setBgHome'>
             <div className='container-fluid setBgHome2 p-3'>
           <img src={ForLogo} alt='Logo' className='btn image ms-2'/>
           </div>
   </div> 
   {/* header  ends*/}
  {/* body starts */}

  {/* search starts */}

       <div className="container-fluid" style={{width:"800px"}}>
       <div className="mt-5">

       <input className="form-check-input ms-3 border border-secondary" type="radio" 
       name="radiodefault" onClick={search_by_option}
       id="Institute_Number_inp" value="Institute Number"/>
        <span className="text-primary ms-2  fs-5">Institute Number &nbsp;</span>

        <input className="form-check-input ms-3 border border-secondary" type="radio" 
       name="radiodefault" onClick={search_by_option}
       id="Institute_Number_inp" value="Institute Name"/>
        <span className="text-primary ms-2  fs-5">Institute Name &nbsp;</span>




        <input className="form-check-input border border-secondary" type="radio" name="radiodefault" 
         onClick={search_by_option}  id="email_inp" value="Email Id" />
        <span className="text-primary ms-2 fs-5" > Email Id &nbsp;</span>

       <input className="form-check-input border border-secondary" type="radio" 
       name="radiodefault"  onClick={search_by_option} id="phone_inp" value="Phone Number"/ >
       <span className="text-primary ms-2 fs-5" >Phone Number &nbsp; </span>
        </div>

        <div className="input-group mb-1 mt-3 ms-5 search_inp">

        <div className="input-group-text text-primary fs-4 border border-primary"> 
         <span id="disp"></span> &nbsp; &nbsp;
     
        <input type="text" id="inp_text" className="form-control input-sm border border-primary" 
        style={{width:"100%"}}/> 
        <button id="btn" className="btn btn-primary ms-5 mb-3" onClick={record_display} style={{width:"60%"}} > 
        <i className="bi bi-search bg-primary"></i>
        </button> 

        </div>
        </div>
        </div>
        
       
{/* search ends */}
    

    
{/* table starts */}
  <div id="table_content" className="ms-4 table_design hide">
  <h2 className="Table_title text-primary mb-4">Radiation Worker Details</h2>
  <table className='table'>
     <tr className='th'>
     <th className='th'>First Name</th>
     <th className='th'>Last Name</th>
     <th className='th'>Name with Initials</th>
     <th className='th'>Mobile Number</th>
     <th className='th'>Email Id </th>
     <th className='th'>DOB</th>
  </tr>
 <tr>
        <td className="edit_option td"><span >{value.FirstName}</span>
          <span >
         
           {toggle1 && ( <Popup trigger={<button 
                              onClick={() => setToggle1(!toggle1)} 
                              className="btn container" id="editing_records">
                               
                              <h6 className='setColor setHov '>
                              <i className='bi bi-file-plus'></i></h6>
                                        </button>
                                        } className="pop_design">
                                  
                                  {
                                    Cancel =>(
                                      
                                      <div>
          {/* changes made */}
                                   
                                 <label>Current First Name:<input type='text' disabled/></label>
                                 <label> New First Name:<input type='text'id='fname_inp'/></label><br/> <br/>
                                    <button type='submit' onClick={first_name_update} className='btn_design'>Save</button> &nbsp;
                                    <button className='ml-5 btn_design' onClick={Cancel}>Cancel</button>
                                  
                                  </div>
                                 
                                    )
                                  }
               </Popup>)}
          </span>
        </td>

        <td className="edit_option td" id="disp_record"><span >{value.LastName}</span>
          <span >
            
            {toggle1 && ( <Popup trigger={<button 
                              onClick={() => setToggle1(!toggle1)} 
                              className="btn container ">
                              <h6 className='setColor setHov '>
                              <i className='bi bi-file-plus'></i></h6>
                                        </button>} className="pop_design" >
                                  
                                  {
                                    Cancel =>(
                                      <div>
                                    <label>Current Last Name:<input type='text' value=''  disabled/></label>
                                    <label>New Last Name:<input type='text'id='lname_inp' /></label><br/> <br/>
                                    <button type='submit' className='btn_design'  onClick={last_name_update}>Save</button> &nbsp;
                                    <button className='ml-5 btn_design' onClick={Cancel}>Cancel</button>
                                  </div>
                                    )
                                  }
               </Popup>)}
            
          </span>
        </td>
           

        <td className="edit_option td" id="disp_record"><span >{value.FullName}</span>
          <span>
          {toggle1 && ( <Popup trigger={<button 
                              onClick={() => setToggle1(!toggle1)} 
                              className="btn container ">
                              <h6 className='setColor setHov '>
                              <i className='bi bi-file-plus'></i></h6>
                                        </button>} className="pop_design">
                                  
                                  {
                                    Cancel =>(
                                      <div>
                                    <label>Current Name:<input type='text' disabled/></label>
                                    <label>New Name:<input type='text'id='fullname_inp' /></label><br/> <br/>
                                    <button type='submit' className='btn_design' onClick={full_name_update} >Save</button> &nbsp;
                                    <button className='ml-5 btn_design' onClick={Cancel}>Cancel</button>
                                  </div>
                                    )
                                  }
               </Popup>)}
            </span>
        </td>
 

        <td className="edit_option td" id="disp_record"><span >{value.MobileNumber}</span>
          <span>
          {toggle1 && ( <Popup trigger={<button 
                              onClick={() => setToggle1(!toggle1)} 
                              className="btn container ">
                              <h6 className='setColor setHov '>
                              <i className='bi bi-file-plus'></i></h6>
                                        </button>} className="pop_design">
                                  
                                  {
                                    Cancel =>(
                                      <div>
                                    <label>Current Mobile Number:<input type='text' disabled/></label>
                                    <label>New Mobile Number:<input type='text'id='number_inp' /></label><br/> <br/>
                                    <button type='submit' className='btn_design' onClick={number_update} >Save</button> &nbsp;
                                    <button className='ml-5 btn_design' onClick={Cancel}>Cancel</button>
                                  </div>
                                    )
                                  }
               </Popup>)}
            </span>
        </td>


        <td className="edit_option td" id="disp_record"><span >{value.Email}</span>
          <span>
          {toggle1 && ( <Popup trigger={<button 
                              onClick={() => setToggle1(!toggle1)} 
                              className="btn container ">
                              <h6 className='setColor setHov '>
                              <i className='bi bi-file-plus'></i></h6>
                                        </button>} className="pop_design">
                                  
                                  {
                                    Cancel =>(
                                      <div>
                                    <label>Current Email Id:<input type='text' disabled/></label>
                                    <label>New Email Id:<input type='text'id='email_inp' /></label><br/> <br/>
                                    <button type='submit' className='btn_design' onClick={mail_update} >Save</button> &nbsp;
                                    <button className='ml-5 btn_design' onClick={Cancel}>Cancel</button>
                                  </div>
                                    )
                                  }
               </Popup>)}
            </span>
        </td>

        <td className="edit_option td" id="disp_record"><span >{value.DOB}</span>
          <span>
          {toggle1 && ( <Popup trigger={<button 
                              onClick={() => setToggle1(!toggle1)} 
                              className="btn container ">
                              <h6 className='setColor setHov '>
                              <i className='bi bi-file-plus'></i></h6>
                                        </button>} className="pop_design">
                                  
                                  {
                                    Cancel =>(
                                      <div>
                                    <label>Current DOB:<input type='date' disabled/></label>
                                    <label>New DOB:<input type='date'id='dob_inp' /></label><br/> <br/>
                                    <button type='submit' className='btn_design' onClick={dob_update} >Save</button> &nbsp;
                                    <button className='ml-5 btn_design' onClick={Cancel}>Cancel</button>
                                  </div>
                                    )
                                  }
               </Popup>)}
            </span>
        </td>
 </tr>
</table> 
</div>
{/* table ends */}

     {/* 1  */}
   </>)} 
            
export default HomePage;   
            




















       