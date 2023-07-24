import style from './LoadingComponent.module.css';

const LoadingComponent = () => {
  return (
    <>
      <div className={style.container}>
        <h3>Uploading...</h3>
        <div className={style.progressBar}>
          <div className={style.blueBar}></div>
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
