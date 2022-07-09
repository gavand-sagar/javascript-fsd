import logo from './logo.svg';
import './App.css';
import RedButton from './RedButton'
import Comment from './Comment'
import HeadingButton from './HeadingButton'
import ColoredButton from './ColoredButton';
import Counter from './Counter';
import ExpandCard from './ExpandCard'
import SongList from './SongList'
function App() {

  let items = ["Java", "Node.js", "React", "Angular", "Vue.js", "Express"]

  let comments =
    [
      {
        heading: "This was funny!!!!",
        author: "sagar",
        comment: "asdfsd"
      },
      {
        heading: "Java, eh?",
        author: "nitin",
        comment: "because its so nice"
      },
      {
        heading: "Why React??",
        author: "sheroz",
        comment: "thats too"
      },
      {
        heading: "Why React??",
        author: "sheroz",
        comment: "thats too"
      }
    ]


  // let comments = ["asdfsd"]


  let songs = [
    {
      songName: 'Vibe',
      songBy: 'Cookiee Kawaii',
      image: '',
      rating: 5
    },
    {
      songName: 'My Truck',
      songBy: 'Breland',
      image: '',
      rating: 2
    },
    {
      songName: 'Moral of Story',
      songBy: 'Ashe',
      image: '',
      rating: 3
    }

  ]


  return (
    <div className="App">

      <SongList songs={songs}/>

      {/* {comments.map(x => <Comment headingColor='red' heading={x.heading} username={x.author} comment={x.comment}></Comment>)} */}


      {/* {items.map(m => <ColoredButton label={m}></ColoredButton>)} */}
      {/* 
      <hr/> */}
      {/* 
      <ColoredButton label={items[0]}></ColoredButton>
      <ColoredButton label={items[1]}></ColoredButton>
      <ColoredButton label={items[2]}></ColoredButton>
      <ColoredButton label={items[3]}></ColoredButton>
      <ColoredButton label={items[4]}></ColoredButton>
      <ColoredButton label={items[5]}></ColoredButton> */}



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



      {/* <Counter min="5" max="10" initialValue="6" heading="Something" /> <br />


      <Counter min="6" max="8" initialValue="7" heading="Different value" />


      <Counter  heading="Different value"  content="asdfsadfsdfsadf"/> */}

      {/* <ExpandCard heading="React" content="React is awesome! asdjkfj asdkjfk jsadkfj ksajdkfjsakdj fksdjk"/> */}


    </div>
  );
}

export default App;
