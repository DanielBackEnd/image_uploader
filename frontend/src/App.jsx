import { useSelector } from 'react-redux';
import ConfirmComponent from './components/ConfirmComponent/ConfirmComponent';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import UploadComponent from './components/UploadComponent/UploadComponent';

function App() {
  const file = useSelector(state => state.file.value);
  const loading = useSelector(state => state.file.loading);
  const uploaded = useSelector(state => state.file.uploaded);

  return (
    <>
      {uploaded ? (
        <ConfirmComponent />
      ) : loading ? (
        <LoadingComponent />
      ) : (
        <UploadComponent />
      )}
    </>
  );
}

export default App;
