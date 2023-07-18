import style from './UploadComponent.module.css';
import dragImage from '../../assets/image.svg';

const UploadComponent = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Upload your image</h1>
        <p className={style.info}>File should be Jpeg, Png,...</p>
        <form>
          <div className={style.dragArea}>
            <img src={dragImage} alt='drag-area-image' />
            Drag & Drop your image here
          </div>
          <p className={style.selectionText}>Or</p>
          <input
            type='file'
            name='image'
            id=''
            className={style.customInput}
            title=' '
          />
          <button type='submit' className={style.submit}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadComponent;
