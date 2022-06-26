import logo from './logo.svg';
import './App.css';
import RedButton from './RedButton'
import Comment from './Comment'

function App() {
  return (
    <div className="App">
      
      <Comment heading="This was funny" username="sagar" comment="asdfsd"></Comment>
      
      <Comment heading="Why react??" username="nitin" comment="because its so nice"></Comment>
      
      <Comment heading="Java?" username="sheroz" comment="thats too"></Comment>
      

    </div>
  );
}

export default App;
