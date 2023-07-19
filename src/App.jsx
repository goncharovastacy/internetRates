import Rate from './components/Rate';
import rates from '../src/data/rates.json'
import './App.scss';

function App() {
  return (
    <div className='container'>
      {
        rates.map(el => (
          <Rate rate={el.rate}
          price={el.price}
          speed={el.speed}
          isSelected={el.isSelected}/>
        ))
      }
    </div>
  );
}

export default App;
