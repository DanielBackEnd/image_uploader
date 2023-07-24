import style from './ConfirmComponent.module.css';
import greenIcon from '../../assets/greenicon.png';

const ConfirmComponent = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.confirmMessage}>
          <img src={greenIcon} alt='green-icon' />
          <h3>Uploaded Successfully!</h3>
        </div>
        <div className={style.preview}>
          <img src='' alt='uploaded-image-preview' />
        </div>
        <div className={style.linkArea}>
          <p className={style.link}>
            http://www.example.com/images/asdasdsadasdasdsadasdasdas/asdasdasd
          </p>
          <button className={style.copyBtn}>Copy Link</button>
        </div>
      </div>
    </>
  );
};

export default ConfirmComponent;
