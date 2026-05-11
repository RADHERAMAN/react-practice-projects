import { useEffect, useState } from "react";
const shows = [
  {
    id: 1,
    title: "The Component Returns",
    time: "10:00 AM",
    hall: "Hall A",
  },
  {
    id: 2,
    title: "Attack of the Re-render",
    time: "12:30 PM",
    hall: "Hall B",
  },
  {
    id: 3,
    title: "Virtual DOM Nights",
    time: "04:00 PM",
    hall: "Hall C",
  },
];

function App() {

  return (
    <div>

      <h1>Shows List</h1>
      
      <section className="grid">
        {shows.map((show) =>
        (
          <article>
            <h3>{show.title}</h3>
            <p>{show.time}</p>
            <p>{show.hall}</p>
          </article>



        ))}

      </section>


    </div>
  );
}

export default App;