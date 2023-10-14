import './App.css';
import BgView from './components/BgComponent';
import BtnExitImg from './assets/btnExit.png'
import BtnCnn from './assets/cnn.png'
import BtnContImg from './assets/btnCont.png'
import BtnPlayImg from './assets/btnPlay.png'
import BtnPauseImg from './assets/btnPause.png'
import ButtonUI from './components/Btn';
import MainThreeScene from './SceneComponents/MainScene';
import { useEffect, useState } from 'react';
import { useGameStore } from './store/store';

function App() {

  const [gameVal, setGameVal] = useState('initial')
  const [cannonSide, setConnonSide] = useState('init')
  // const resetGame = useGameStore((state) => state.reset) 

  const handleGameChange = (gameBtn) => {

    setGameVal(gameBtn)
    if(gameBtn === 'exit') {
      setConnonSide('init')
 
      
    }
  

  }

  // useEffect(() => {
  //   console.log(gameVal, cannonSide)
  // }, [ cannonSide]);

  return (
    <div className="App">
      <BgView/>
        {
          gameVal === 'pause' ? (
            <>
              <ButtonUI onClick={() => handleGameChange('exit')} imgSrc={BtnExitImg} btnStyle={'btnPos'}/>
              <ButtonUI onClick={() => handleGameChange('cont')} imgSrc={BtnContImg} btnStyle={'btnPos2'}/>
            </>
          ) 
          : gameVal === 'play' ? (<>
              <ButtonUI onClick={() => handleGameChange('pause')} imgSrc={BtnPauseImg} btnStyle={'btnPos3'}/>
          </>)
          : gameVal === 'cont' ? (<>
              <ButtonUI onClick={() => handleGameChange('pause')} imgSrc={BtnPauseImg} btnStyle={'btnPos3'}/>
          </>)
          : 
      ( <>
        <ButtonUI onClick={() => handleGameChange('exit')} cnnBtnFlag={'btn'} imgSrc={BtnExitImg} btnStyle={'btnPos'}/>
        <ButtonUI onClick={() => handleGameChange('play')} cnnBtnFlag={'btn'} imgSrc={BtnPlayImg} btnStyle={'btnPos4'}/>
        { cannonSide === 'init' ? <>
        <h1 className='cnnTxt'>Choose a cannon</h1>
        <h1 className='cnnTxtR'>Right</h1>
        <h1 className='cnnTxtL'>Left</h1>

          <ButtonUI onClick={() => setConnonSide('right')} cnnBtnFlag={'cnn'} imgSrc={BtnCnn} btnStyle={'cnnBtn'}/>
          <ButtonUI onClick={() => setConnonSide('left')} cnnBtnFlag={'cnn'} imgSrc={BtnCnn} btnStyle={'cnnBtnL'}/>
        </> 
        : cannonSide === 'right' ?
        <>
        <h1 className='cnnTxtR'>Right</h1>
        <ButtonUI onClick={() => setConnonSide('right')} cnnBtnFlag={'cnn'} imgSrc={BtnCnn} btnStyle={'cnnBtn'}/>
        </>
        : 
        <>
        <h1 className='cnnTxtL'>Left</h1>
        <ButtonUI onClick={() => setConnonSide('left')} cnnBtnFlag={'cnn'} imgSrc={BtnCnn} btnStyle={'cnnBtnL'}/>
        </>


        
      }

      </>)

        }

         
      <MainThreeScene cnnSide = {cannonSide} gameVal={gameVal}/>

    </div>
  );
}

export default App;
