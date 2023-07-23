import style from './UploadComponent.module.css';
import dragImage from '../../assets/image.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setFile, setLoading, setUploaded } from '../../slices/fileSlice';
import { useEffect } from 'react';

const UploadComponent = () => {
  const file = useSelector(state => state.file.value);
  const loading = useSelector(state => state.file.loading);
  const uploaded = useSelector(state => state.file.uploaded);
  const dispatch = useDispatch();

  const dropInArea = e => {
    e.preventDefault();
    dispatch(setFile(e.dataTransfer.files[0]));
  };

  const dragOverArea = e => {
    e.preventDefault();
    console.log('drag over area');
  };

  const dragOutsideArea = e => {
    e.preventDefault;
    console.log('drag outside area');
  };

  useEffect(() => {
    if (file !== null) {
      console.log(file);
    }
  }, [file]);

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
            onChange={e => {
              dispatch(setFile(e.target.files[0]));
            }}
          />
        </form>
      </div>
    </>
  );
};

export default UploadComponent;
