import './App.css';
import Navbar from './Navbar';
import React, { useRef } from 'react';

function App() {
  const formRef = useRef(null);

  const handleSubmit = async (event) => {

    event.preventDefault();
    const email = event.target.email.value;

    await fetch('http://localhost:3001/submit-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    formRef.current.reset();
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="title-container">
          <h1 className="App-title">Blueberry Pill Dispenser</h1>
          <hr className="title-divider" />
          <h3 className="App-subtitle">Innovative Medication Dispenser</h3>
          <form className="email-form" onSubmit={handleSubmit} ref={formRef}>
            <input type="email" placeholder="Enter your email to join our mailing list!" name="email"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
