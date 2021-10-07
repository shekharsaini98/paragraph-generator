import {useState} from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(count<=0){
      setCount(1);
      setText(data.slice(0, 1));
      return;
    }
    else if(count>8){
      setCount(8);
      setText(data.slice(0, 8));
      return;
    }
    setText(data.slice(0, count));
  }
  return (
    <div className="App">
      <section className="App-header">
        <h3 className="heading">TIRED OF BORING LOREM IPSUM?</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="para-input" className="para-label">Paragraph:</label>
          <input type="number" id="para-input" value={count} onChange={(e)=>setCount(e.target.value)} className="para-input" />
          <button type="submit" className="btn-generate">Generate</button>
        </form>
        <article className="generated-para">
          {
            text.map((item,index)=><p key={index}>{item}</p>)
          }
        </article>
      </section>
    </div>
  );
}

export default App;
