import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/loginform';
import Home from './components/Home';
import Document from './components/Dashboard/Document'
import Homes from './components/Dashboard/Homes'
import './App.css'
import Setting from './components/Dashboard/Setting';
/*import Homes from './components/Dashboard/Homes'
import Header from './components/Dashboard/Header'
import Sidebar from './components/Dashboard/Sidebar'*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}> </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}>

          <Route index element={<Homes />} />
          <Route path="document" element={<Document />} />
          <Route path='setting' element={<Setting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    /*<div className='grid-container'>
      /*<Header/>
      <Sidebar/>
      <Homes/>
      </div>*/
  );
}
export default App;
 