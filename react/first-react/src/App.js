import logo from './logo.svg';
import './App.css';
import RedButton from './RedButton'
import Comment from './Comment'
import HeadingButton from './HeadingButton'

function App() {
  return (
    <div className="App">

      {/* <HeadingButton label="Home"/>
      <HeadingButton label="New Post"/>
      <HeadingButton label="Save"/> */}

      <HeadingButton label="Home"/>

      {/* <button className="heading-button">Save</button>

      <button className="heading-button">Home</button>
      <button className="heading-button">New Post</button> */}

      {/* <Section heading="Car & bike essentials | Up to 60% off" t1="" t2="" t3=""/>


      <Section heading="" t1="" t2="" t3=""/>


      <Section heading="Car & bike essentials | Up to 60% off" t1="" t2="" t3=""/>


      // its must be with background color white 
      // must have heith of 500px and with of 300px

      //whatever heading value you pass that must show as heading in the section
      // fout text */}


      <Comment heading="This was funny" username="sagar" comment="asdfsd"></Comment>

      <Comment heading="Why react??" username="nitin" comment="because its so nice"></Comment>

      <Comment heading="Java?" username="sheroz" comment="thats too"></Comment>


    </div>
  );
}

export default App;
