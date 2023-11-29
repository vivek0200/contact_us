import { useState } from 'react'
import './App.css';
import Navigation from './component/Navigation/Navigation';
import ContactHeader from './component/Navigation/ContactHeader/contactHeader';
import ContactForm from './component/Navigation/ContactForm/ContactForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App
