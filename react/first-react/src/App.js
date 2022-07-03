import logo from './logo.svg';
import './App.css';
import RedButton from './RedButton'
import Comment from './Comment'
import HeadingButton from './HeadingButton'
import ColoredButton from './ColoredButton';
import Counter from './Counter';
import ExpandCard from './ExpandCard'
function App() {
  return (
    <div className="App">

      {/* <HeadingButton label="Home"/>
      <HeadingButton label="New Post"/>
      <HeadingButton label="Save"/> */}

      {/* <HeadingButton label="Home"/>
      <HeadingButton label="Home"/>
      <HeadingButton label="Home"/>
      <HeadingButton label="Home"/> */}

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

      {/* 

      <Comment headingColor='red' heading="This was funny" username="sagar" comment="asdfsd"></Comment>

      <Comment headingColor='yellow' heading="Why react??" username="nitin" comment="because its so nice"></Comment>

      <Comment headingColor='green' heading="Java?" username="sheroz" comment="thats too"></Comment>

      <Comment headingColor='blue' heading="Javscript?" username="chris" comment="hsdahfhsadhf afsd fsadf"></Comment>
      */}

      {/* <ColoredButton label="React"></ColoredButton>
      <ColoredButton label="Java"></ColoredButton>
      <ColoredButton label="Node.js"></ColoredButton> */}



      {/* <Counter min="5" max="10" initialValue="6" heading="Something" /> <br />


      <Counter min="6" max="8" initialValue="7" heading="Different value" />


      <Counter  heading="Different value"  content="asdfsadfsdfsadf"/> */}



      <ExpandCard heading="React" content="React is awesome! asdjkfj asdkjfk jsadkfj ksajdkfjsakdj fksdjk"/>


    </div>
  );
}

export default App;
