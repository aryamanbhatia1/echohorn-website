import './home.css'; 
import SwiperEffect from '../swiperEffect/SwiperEffect';

const Home = () => {
  return (
    <>
    <div className="home-hero">
      <h1 className="home-text">
        <ul className="para">
            <li className='line1'>
            <span>Engineering the quiet</span>
            </li>
            <li className='line2'>
            <span> in the chaos of</span> 
            </li>
            <li className='line3'>
            <span>motion.</span> 
            </li>
        </ul>
      </h1>
      <SwiperEffect/>
    </div>
    
    </>
  );
};

export default Home;