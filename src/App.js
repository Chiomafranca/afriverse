import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Charts from './components/Charts';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Dashboard />
    // <div >
    //   <Header />

    //   <div className=' flex justify-between'>
    //     <div>
    //       <SideBar />
    //     </div>

    //     <div className=' absolute'>
    //       <Charts />
    //     </div>
    //   </div>

    // </div>
  );
}

export default App;
