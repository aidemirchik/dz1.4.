import './App.css';
import Qwe from './assests/Rectangle 24.jpg'
import Qaz from './assests/Rectangle 25.jpg'

function App() {
  return (
    <div className='container'>
      <h2>50+ Beautiful rooms inspiration</h2>
      <h5>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h5>
      <button className='btn'><p className='text'>Explore More</p></button>
      <img src={Qwe} alt="" className='qwe'/>
      <img src={Qaz} alt="" className='qwe' />
    </div>
  );
}

export default App;
