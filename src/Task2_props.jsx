 import Task2Content from './Task2Content';
 import './Task2_props.css';




function Task2_props (){

  
                return(
                  <>
                 <div class="whole_content"> 
                  <Task2Content  name="Max" city="Chennai"/>
                  <Task2Content name="Raj" city="Bangalore"/> 
                  <Task2Content name="Ravi" city="South Korea"/> 

                  <h1 className='children_styling'> MyHobbies :" Gardening" </h1>
                  {/* this is children property */}
                </div> 

                  </>
                )
}
export  default Task2_props;