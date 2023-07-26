import Rate from './components/Rate';
import rates from '../src/data/rates.json'
import './App.scss';

function App() {
  return (
    <div className='container'>
      {
        rates.map((el, i) => (
          <Rate key={i}
          rate={el.rate}
          price={el.price}
          speed={el.speed}
          color={el.color}
          />
        ))
      }
    </div>
  );
}

export default App;
