import style from './UploadComponent.module.css';
import dragImage from '../../assets/image.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setFile } from '../../slices/fileSlice';

const UploadComponent = () => {
  const file = useSelector(state => state.file.value);
  const dispatch = useDispatch();

  const dropInArea = e => {
    e.preventDefault();
    // console.log(e.dataTransfer.files[0]);
    console.log(file);
    dispatch(setFile(e.dataTransfer.files[0]));
    console.log(file);
  };

  const dragOverArea = e => {
    e.preventDefault();
    console.log('drag over area');
  };

  const dragOutsideArea = e => {
    e.preventDefault;
    console.log('drag outside area');
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Upload your image</h1>
        <p className={style.info}>File should be Jpeg, Png,...</p>
        <form>
          <div
            className={style.dragArea}
            id='drag-area'
            onDrop={dropInArea}
            onDragOver={dragOverArea}
            onDragLeave={dragOutsideArea}
          >
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
