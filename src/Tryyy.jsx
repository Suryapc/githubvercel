// import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import ForLogo from './AdminPage/Images/AvanttecLogo.png'


function HomePage (){

       const [toggle, setToggle] = useState(true);
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
        <span className="text-primary ms-2  fs-5">InstituteNumber &nbsp;</span>


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
        <td className="edit_option td"><span >Surya</span>
          <span >
          <i className="bi bi-file-plus ms-4" onClick={edit_fname}></i>
          </span>
        </td>

        <td className="edit_option td" id="disp_record"><span >Chandrasekaran</span>
          <span >
            <i className="bi bi-file-plus ms-4" onClick={edit_lname}></i>
          </span>
        </td>
           

        <td className="edit_option td" id="disp_record"><span >P C Surya</span>
          <span>
            <i className="bi bi-file-plus ms-4"></i>
            </span>
        </td>
 

        <td className="edit_option td" id="disp_record"><span >9874785778</span>
          <span>
            <i className="bi bi-file-plus ms-4"></i>
            </span>
        </td>


        <td className="edit_option td" id="disp_record"><span >pcs@gmail.com</span>
          <span>
            <i className="bi bi-file-plus ms-4"></i>
            </span>
        </td>

        <td className="edit_option td" id="disp_record"><span >DOB</span>
          <span>
            <i className="bi bi-file-plus ms-4"></i>
            </span>
        </td>
 </tr>
</table>
</div>
</>
)}  



export default HomePage;


{/* table ends */}

{/* change table  */}

{/* <!-- Institute Name --> */}
  
  {/* <div className="input-group m-5  n1 hide"  id="display_first_name" >
      <span className="input-group-text">
  Current First Name: <input type="text" disabled/>
  New First Name :
  <input type="text" id="new_first_name"/>
  <button onclick="close_Edit_InstName()" className="bg-primary text-white">Submit</button>
  <button className="bg-primary text-white">Cancel</button>
</span>
</div> */}

 {/* <!-- Institute Name --> */}

 {/* <div className="input-group m-5  n1 hide"  id="display_last_name" >
      <span className="input-group-text">
  Current Last Name: <input type="text" disabled/>
  New Last Name :
  <input type="text" id="new_first_name"/>
  <button onclick="close_Edit_InstName()" className="bg-primary text-white">Submit</button>
  <button className="bg-primary text-white">Cancel</button>
</span>
</div> */}

{/* ---sanja--- */}

{/* <tr> */}
                            {/* <td><h6> hello </h6>
 {toggle && (<button onClick={() => setToggle(!toggle)} 
                                        className="btn container ">
                                        <h6 className='setColor setHov '>
                                        <i className='bi bi-pencil-square'></i>Edit Institite Name</h6>
                                        <input type="text" disabled/>
                                        <input type="text" id="new_first_name"/>
                                        <button  className="bg-primary text-white">Submit</button>
                                        </button>)}
     
 </td> */}
                                  
                                   
                
             


//    <td><h6> all </h6>       
//  {toggle && (<button onClick={() => setToggle(!toggle)} 
//                                         className="btn container ">
//                                         <h6 className='setColor setHov '>
//                                         <i className='bi bi-pencil-square'></i>Edit Institite Name</h6>
//                                         <input type="text" disabled/>
//                                         <input type="text" id="new_first_name"/>
//                                         <button  className="bg-primary text-white">Submit</button>
//                                         </button>)}                          
// </td>

// </tr>







       