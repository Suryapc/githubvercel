import { Link } from 'react-router-dom';
// import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom';

import ForLogo from './images/AvanttecLogo.png'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = () =>{


    // const navigateHome = () => {
    //     // 👇️ navigate to /
    //     navigate('/homepage');
    //   };

    return(
       
        <div className='setBgHome'>
             <div className='container-fluid setBgHome2 p-3'>
           <img src={ForLogo} alt='Logo'  className='btn image ms-2'/>
                
              </div> 

              <div className='container  h-50  mt-5 '>
              <div className="card setCardW setShadow" >
                <div className="card-body container">

                   <h4 className='text-center des'>User Name</h4>
                      {/* input1 */}
                    <div className='row mt-5 des'>
                    <div className='col-sm-2 des'>
                            
                            </div>
                        <div className='col-sm-1 des'>
                        <i className="bi bi-person-fill h2 des "></i>

                        </div>
                        <div className='col-sm-7 des'>
                        <input type="text" className="form-control" />

                        </div>
                    </div>
                    {/* input1 end */}
                    <h4 className='text-center mt-5 des'>Password</h4>
                    
                    {/* input2 */}
                    <div className='row mt-5 des'>
                    <div className='col-sm-2 des'>

                            </div>
                        <div className='col-sm-1 des'>
                        <i className="bi bi-unlock-fill h2 des"/> 

                        </div>
                        <div className='col-sm-7 des'>
                        <input type="text" className="form-control" />

                        </div>
                    </div>
                    {/* input2 end */}
                    

                        <div className='row mt-5 des'>
                            <div className='col-sm-4 des'>

                            </div>

                            <div className='col-sm-5 mt-3 des'>
                          
  
    <a href="www.google.com" target="_blank">
    <button className='btn des setbtnColor btn-primary setbtnBg'>Home</button>
    </a>                   
                            </div>

                            <div className='col-sm-3 des'>
                                
                            </div><br/>

                            <div className='mt-5'>

                            </div>

                        </div>

               </div>
               </div>
              </div>
        </div>
        
    )
}

export default Login;