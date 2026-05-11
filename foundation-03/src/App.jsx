import { useState } from 'react'
import AvtarCard from './Component/AvtarCard';
import './App.css'
// import { Children } from 'react';
const avtars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV"

  },
  {
    id: 2,
    name: "flux",
    role: "state keeper",
    power: "useState",
    initials: "fx"

  },
  {
    id: 3,
    name: "Memo",
    role: "optimizer",
    power: "Memoization",
    initials: "MM"

  }
];
function Shell({ title, children }) {
  return (
    <section>
      <p>Reusable Shell</p>
      <h2>{title}</h2>
      {children}
      <p>This is for test</p>
    </section>
  );
}

function App() {

  return (
    <>
      <h1>Children is react</h1>
      <Shell title="Batman">
        <h1>this is inside shell</h1>
        <p>this also inside shell</p>
      </Shell>
      <h1>Hello from Raman</h1>
      <section>
        {avtars.map((avtar) => (
          <AvtarCard 
          key = {avtar.id}
          level = {avtar.id === 1 ? "captain" : undefined}
          avtar = {avtar}
          />
        ))}
      </section>
    </>
  )
}

export default App
