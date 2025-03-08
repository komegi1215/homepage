// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
      axios.get("http://localhost:8001/api/")  // Use "localhost" instead of "127.0.0.1"
          .then(response => setMessage(response.data.message))
          .catch(error => console.error("Error fetching API:", error));
  }, []);

    return (
        <div>
            <h1>React + Django Homepage</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
