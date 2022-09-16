import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar logo='https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png' />
    </>
  );
}
Navbar.prototype = {
  logo: PropTypes.string
}

export default App;
