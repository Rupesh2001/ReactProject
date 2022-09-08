import Button from "./Button"

const App  =()=> {
    return <div>
        <h1> useful website </h1>
    <h3> which website do you want to open?</h3>
    <input type="text" name="name"/>
  <Button name="google" link="https://www.google.com/"/>
  <Button name="Facebook" link="#"/>
  <Button name="GitHub"/>
   
   </div> 
}
export default App;