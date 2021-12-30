import logo from './logo.svg';
import './App.css';
import  ProfilePhoto  from './Component/Profile/ProfilePhoto';
import FullName  from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName/>
      <Address/>
      <Navbar/>
    </div>
  );
}

export default App;
