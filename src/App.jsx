// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 // import './App.css';
//  import {Header_section , Body_section , Footer_section}  from './Task1.jsx'
// import Task2_props  from './Task2_props';

  // import Task3Main  from './Task3Main';
import Task3_mapping from './Task3_mapping';
  
// // ---Routing task start--
  // import './Routing_Task/Routing.css';
  // import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  // import Home from './Routing_Task/Home';
  // import About from './Routing_Task/About';
  // import SignIn from './Routing_Task/SignIn'
  // import Footer from './Routing_Task/Footer';
// // ---Routing task end--

 //import ImageUploading from './ImageUploading';

function App(){
   return(
    <>
 <Task3_mapping/>    
  {/* <Task3Main/>   */}
   {/* <ImageUploading/> */}
    </>
   )
}
export default App;

// Routing task Strt

// function App(){
//   return(
//    <>
//   <Router>
//   <Home/>
//      <Routes>
//       <Route>
//        <Route path="about" element={<About/>} /> 
//        <Route path="signin" element={<SignIn/>} /> 
//        </Route>
//        </Routes>
//      <Footer/>
//    </Router>
//    </>
//   )
// }
//  export default App;

// Routing task end



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App