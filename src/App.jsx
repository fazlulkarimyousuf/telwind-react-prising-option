import {Suspense} from 'react';
import './App.css'
// import DaisyNav from './components/daisyNav/daisyNav';
import NavBar from './components/DaisyNav/NavBar/NavBar';
import PricingOption from './components/PricingOption/PricingOption';


  const pricingPromise = fetch('PricingData.json').then(res => res.json());


function App() {

  return (
    <>
    <header>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <PricingOption pricingPromise={pricingPromise}></PricingOption>
    </Suspense>
    </main>

    <footer>
      
    </footer>
    </>
  )
}

export default App;