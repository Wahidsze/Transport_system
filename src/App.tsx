import React from 'react';
import PersonalBtn from './homepage/personal_info/personal_button';
import InfoInput, {InputType} from './homepage/info_input/info_input';
import FindTicket from './homepage/find_ticket_button/find_ticket_button'
import image from './logo_wolf.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid px-5 pb-5">
        <div className='row pt-5 align-items-center'>
          <div className='col-sm'>
            <img src={image} width="100vp" height="100vp"></img>
          </div>
          <div className='col-sm'>
            <PersonalBtn/>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col'>
            <h1 className='homepage-title'>
            "Эй, партнёр, вставай на рельсы! Забронируй билет на поезд шустро, чтоб не упустить своё место. Путь ждёт — всё просто и надёжно, как верный конь под седлом!" - «Дикий Билл» Xикoк</h1>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col-3 p-0'>
            <InfoInput input_type={InputType.DEPARTURE_CITY}/>
          </div>
          <div className='col-3 p-0'>
            <InfoInput input_type={InputType.ARRIVAL_CITY}/>
          </div>
          <div className='col-3 p-0'>
            <InfoInput input_type={InputType.DATE}/>
          </div>
          <div className='col-3 p-0'>
            <FindTicket/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;