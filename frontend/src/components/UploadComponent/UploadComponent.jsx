import style from './UploadComponent.module.css';
import dragImage from '../../assets/image.svg';

const UploadComponent = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <form>
          <div className={style.dragArea}>
            <img src={dragImage} alt='drag-area-image' />
          </div>
          <p>Or</p>
          <input type='file' name='' id='' />
          <button type='submit'>submit</button>
        </form>
      </div>
    </>
  );
};

export default UploadComponent;
