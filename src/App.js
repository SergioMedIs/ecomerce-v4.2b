
import './App.css';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Products from './components/Products';
import HeroM from './components/HeroM'
import SingUp from './components/SingUp'
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
  <Route path='/SingUp' element={<SingUp/>}/>
    <Route path='/carrito' element={<CarCheck/>}/>
    <Route path='/Pago01' element={<PaymentForm/>}/> 
    </Routes> 
  {/*     <Products/>
       <HeroM/>
       <SingUp/>
    <CarCheck/> */}
  {/*   <PaymentForm/> */}
       </div>
 

  );
}

export default App;
