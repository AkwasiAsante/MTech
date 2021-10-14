import './app.css';
import PersonalInfo from './components/info/PersonalInfo';
import Tabs from './components/tab/Tabs';

function App() {
  return (
    <div className='appStyled'>
      <div className='tabs-con'>
        <PersonalInfo />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
