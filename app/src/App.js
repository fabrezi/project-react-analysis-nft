import Loggo from './PIC.PNG'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>NFT Data Visualization Test</p>
          <table className="App-table">
            <tr>
              <th>id</th>
              <th>num_sales</th>
            </tr>
            <tr>
              <td>	158831</td>
              <td>3</td>
            </tr>
          </table>
          
        <img  src={Loggo} alt="fireSpot"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is react stuff
        </a>
      </header>
    </div>
  );
}

export default App;
