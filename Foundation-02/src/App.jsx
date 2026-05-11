import { useState } from "react";


const shows = [
  {
    id: 1,
    title: "the component returns",
    time: "10.00 am",
    hall: 'hall a'
  },
  {
    id: 2,
    title: "Attack of the re-render",
    time: "12.30 pm",
    hall: 'hall b'
  },
  {
    id: 3,
    title: "virtual dom insight",
    time: "14.00 am",
    hall: 'hall c'
  },

];

function App() {


  return (
    <div>
      <h1>Hello</h1>
      <section className="grid">
        {
          shows.map((show) => (
            <article>
              <p className="identity">{show.id}</p>
              <p className="tag">{show.hall}</p>
              <h3>{show.title}</h3>
              <p className="muted">{show.time}</p>
            </article>
          ))
        }
      </section>
    </div>
  )
}

export default App
