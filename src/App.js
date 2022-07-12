// src/App.js
import "./App.css";
import {useState} from "react";
import Contacts from "./contacts.json";





function App() {
  let fiveContacts = Contacts.slice(0,5)
  const [contacts, setContacts] = useState(fiveContacts);
  const [count, setCount] = useState(0);

  function random() {
    let randomIndex = Math.floor(Math.random() * Contacts.length)
    setContacts([...contacts, Contacts[randomIndex]]);
  }
  
  return (
  <div className="App">
    <h2>IronContacts</h2>
    <button onClick={random}>Add Random Contact</button>
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
    
        {fiveContacts.map((contact) => {
          return (
          <tr>
            <td>
              <img src={contact.pictureUrl} alt="actor"></img>
            </td>
            <td>
              <p>{contact.name}</p>
            </td>
            <td>
              <p>{contact.popularity.toFixed(2)}</p>
            </td>
            <td>
              {contact.wonOscar && <p>🏆</p>}
            </td>
            <td>
              {contact.wonEmmy && <p>🏆</p>}
            </td>
          </tr>
          );        
        })}
      
    </table>
  
  </div>
  );
}
export default App;