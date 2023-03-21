import './App.css';
import { Data } from './assets/data';
import Card from './components/Card';
import ActivityIcon from './assets/activity.svg';

function App() {
  return (
    <div className="App">
      <h1 className='text-primary flex gap-4 pb-36 pt-10 pl-20'>
        <img src={ActivityIcon} alt="icon"  />
        Trending Assets
        </h1>
      <div className='flex flex-row flex-wrap gap-16 items-center justify-center'>
        {
          Data.map((card,index)=>(
            <Card {...card} key={index}/>
          ))
        }
      </div>
    </div>
  );
}



export default App;
