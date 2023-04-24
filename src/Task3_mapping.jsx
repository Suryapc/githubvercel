// toggle and delete


import React, { Component } from "react";
import Task3Content from "./Task3Content";
import './Task3.css';
class Task3_mapping  extends Component {
                state={
                persons:[
                {name:"max",age:24},
                {name:"Jack",age:26},
                {name:"Scott",age:28},
                {name:"sheela",age:28},
                    ],
                showPersons:true,
                     };
   

    // toggle  
    togglePersonsHandler=()=>{
                const doesShow=this.state.showPersons;
                    this.setState({
                        showPersons:!doesShow,
                     })}

    
   // delete 
   deletePersonHandler=(personIndex )=>{
       const persons=this.state.persons;
       persons.splice(personIndex,1);
       this.setState({
        persons:persons,
       })
                   }
    render() {
         let btnStyle={
                   backgroundColor:"blue",
                   marginLeft:"25%",
                   marginTop:"10%",
                  width:"20%",
                  padding:"5px",
                  color:"white"
                     }
    //Mapping
         let persons=null;

         if(this.state.showPersons){
          persons=(<div>
            {this.state.persons.map((person,index)=>{
              return(
                <Task3Content name="surya"
                       delete={()=>this.deletePersonHandler(index)}/>
                       )
                
            })}
            </div>)
            }
            else{
                persons=(
                <div>
                    <p>No records found</p>            
                </div>)
            }
        return(
             <>
            <div className="text-primary ms-5 fs-4 mt-5"> ---Toggle Mapping & Delete--</div> 
            <button type="button"  style={btnStyle} 
            onClick={this.togglePersonsHandler}>TOGGLE</button>
           <div className="display_style">{persons}</div>
           </>        
            )
           }}

export default Task3_mapping;

// import { Link } from 'react-router-dom';
// import ForLogo from './images/AvanttecLogo.png'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const Task3_mapping = () =>{
//     return(
//         <div className='setBgHome'>
//              <div className='container-fluid setBgHome2 p-3'>
//               {/* <Link to='/'> <img src={ForLogo} alt='Logo'  className='btn image ms-2' /></Link>   */}
                
//               </div> 

//               <div className='container h-50 w-50 mt-5 '>
//               <div className="card setCardW setShadow" >
//                 <div className="card-body container">

//                    <h4 className='text-center '>User Name</h4>
//                       {/* input1 */}
//                     <div className='row mt-5'>
//                     <div className='col-sm-2'>
                            
//                             </div>
//                         <div className='col-sm-1 '>
//                         <i className="bi bi-person-fill h2  "></i>

//                         </div>
//                         <div className='col-sm-7'>
//                         <input type="text" class="form-control" />

//                         </div>
//                     </div>
//                     {/* input1 end */}
//                     <h4 className='text-center mt-5 '>Password</h4>
                    
//                     {/* input2 */}
//                     <div className='row mt-5'>
//                     <div className='col-sm-2'>

//                             </div>
//                         <div className='col-sm-1 '>
//                         <i class="bi bi-unlock-fill h2"/> 

//                         </div>
//                         <div className='col-sm-7'>
//                         <input type="text" class="form-control" />

//                         </div>
//                     </div>
//                     {/* input2 end */}
                    

//                         <div className='row mt-5'>
//                             <div className='col-sm-4'>

//                             </div>

//                             <div className='col-sm-5 mt-3 '>
//                             {/* <Link to='/App' className=' btn setbtnColor setbtnBg ' > */}
//                                 LOGIN
//                                 {/* </Link>  */}

//                             </div>

//                             <div className='col-sm-3'>
                                
//                             </div><br/>

//                             <div className='mt-5'>

//                             </div>

//                         </div>

//                </div>
//                </div>
//               </div>
//         </div>
//     )
// }

// export default Task3_mapping;