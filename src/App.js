import { ProductsContextProvider } from './global/ProductsContext'
import {BrowserRouter , Routes  , Route} from 'react-router-dom'
import {Home} from './components/Home'
function App() {
  return (
    <div className="App">
    <ProductsContextProvider>
     <BrowserRouter>
     <Routes>
       <Route exact  path='/' element={<Home/>}></Route>
       </Routes>
       </BrowserRouter>
       </ProductsContextProvider>
      
    </div>
  );
}

export default App;
