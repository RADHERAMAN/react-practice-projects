import { useState } from 'react'
import "./ManualForm.css";
import ManualForm from './ManualForm'
import HookForm from './HookForm'

function App() {
  const [tab, setTab] = useState("manual");

  return (
    <div className="app-container">

      <div className="header-card">
        <h2>Job Application Portal</h2>
        <p>
          Apply for your dream role using Manual Form
          or React Hook Form with beautiful UI.
        </p>
      </div>

      <div className="tab-card">
        <button onClick={() => setTab("manual")}>
          Controlled Manual Form
        </button>

        <button onClick={() => setTab("hook")}>
          React Hook Form
        </button>
      </div>

      <div className="form-card">
        <h1>Starting with React using JavaScript</h1>

        {tab === "manual" ? <ManualForm /> : <HookForm />}
      </div>

    </div>
  )
}

export default App