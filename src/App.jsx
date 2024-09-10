import './App.css';
import BottomSection from './components/BottomSection';
import FooterSection from './components/FooterSection';
import MiddleSection from './components/MiddleSection';
import Navbar from './components/Navbar';
import TopSection from './components/TopSection';


function App() {
  return (
    <main className='main'>
      <Navbar/>
      <TopSection/>
      <MiddleSection/>
      <BottomSection/>
      <FooterSection/>
    </main>
  )
}

export default App
