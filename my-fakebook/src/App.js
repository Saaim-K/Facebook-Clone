import './App.css';
import Navbar from './Compnents/Navbar';
import LeftSidebar from './Compnents/Left-Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='body'>
      <LeftSidebar />
      {/* <Post/> */}

      </div>
    </div>
  );
}

export default App;
