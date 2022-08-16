
import './App.css';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Products from './components/Products';
import HeroM from './components/HeroM'
import SingUp from './components/SingUp'
import SingIn from './components/SingIn'
import CarCheck from './components/CarCheck'
import PaymentForm from './components/PaymentForm'
import { BrowserRouter } from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { Route} from 'react-router-dom';
function App() {
  return (
    
    <div>
   <Navbar/>
   <Routes>
    <Route path='/home' element={<Products/>}/>
    <Route path='/home' element={<HeroM/>}/>
    <Route path='/SingUp' element={<SingUp/>}/>
    <Route path='/carrito' element={<CarCheck/>}/>
    <Route path='/Pago01' element={<PaymentForm/>}/>
    <Route path='/registro' element={<SingIn/>}/> 
    </Routes> 
 
       </div>
 

  );
}

export default App;
