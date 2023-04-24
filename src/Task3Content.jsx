const Task3Content = (props) => {
                return (
                  <div>
                    <p onClick={props.click}>
                      I'm a {props.name}, and I'm an {props.age} years old.
                     </p>
                    
                    <input type="text" onChange={props.change} />
                    <button type="button" onClick={props.delete}>
                      Delete
                    </button>
                  </div>
                );
              };
              
export default Task3Content;