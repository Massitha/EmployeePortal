
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeListing from './Components/EmployeeListing';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeUpdate from './Components/EmployeeUpdate';
import EmployeeDetail from './Components/EmployeeDetail';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="my-div">
      <Container className="container-center">

     <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeListing />}></Route>
           <Route path='/employee/create' element={<EmployeeCreate />}></Route>
           <Route path='/EmployeeUpdate' element={<EmployeeUpdate />}></Route> 
           <Route path='/EmployeeDetail/:empid' element={<EmployeeDetail />}></Route> 
        </Routes>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
