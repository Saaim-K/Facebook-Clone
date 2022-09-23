import './App.css';
import Navbar from './Compnents/Navbar';
import LeftSidebar from './Compnents/Left-Sidebar';
import Body from './Compnents/Body';
function App() {
  return (
    <div>
      <Navbar />
      <div className='body'>
        <div className='leftSideBar'>
          <LeftSidebar />
        </div>
        <div className='mainPost'>
          <Body />
          {/* <Post/> */}
        </div>
        <div className='rightSideBar'></div>
      </div>

    </div>
  );
}

export default App;
