

const ButtonUI = ({btnStyle, imgSrc, onClick, cnnBtnFlag}) => {

  // const handleChange = (gameBtn) => {
  //   e.preventDefault();
  //   // updateGameState(handleClick);
  //   console.log('hit hit')

  // }

    return (
        <div className={btnStyle}>
          <img src={imgSrc} onClick={onClick} className={cnnBtnFlag === 'btn' ? 'btnImg': cnnBtnFlag === 'cnn' ? 'btnCnnImg' :  'btnImg'  }/>
        </div>
    )
}

export default ButtonUI;