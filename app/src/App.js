import './App.css';
import crypto from 'C:\\Users\\paul\\vscode-projects\\project-react-analysis-nft\\app\\src\\pictures\\crypto1.PNG'
import ape from 'C:\\Users\\paul\\vscode-projects\\project-react-analysis-nft\\app\\src\\pictures\\ape02.PNG'
import ape1 from 'C:\\Users\\paul\\vscode-projects\\project-react-analysis-nft\\app\\src\\pictures\\ape03.PNG'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>NFT--ANALYSIS</p>
          <table className="App-table">
            <tr>
              <th>ID </th>
              <th>name</th>
            </tr>
            <tr>
              <td>123881 </td>
              <td>Jhonny</td>
            </tr>
          </table>
          <img src={crypto} alt="" />
          <img src={ape} alt="image not found"/>
          <img src={ape1} alt="" />
      </header>
    </div>
  );
}

export default App;
