import {Header,TopSection,BottomSection,MembershipOptions,Footer, Testimonials,TechJourney} from "./components"
import './App.css'

function App() {

  return (
    <div className="app">
      <Header/>
      <TopSection/>
      <BottomSection/>
      <TechJourney/>
      <MembershipOptions/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
