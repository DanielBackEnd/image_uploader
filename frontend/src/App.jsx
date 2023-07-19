import { useState } from 'react';
import ConfirmComponent from './components/ConfirmComponent/ConfirmComponent';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import UploadComponent from './components/UploadComponent/UploadComponent';

function App() {
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <UploadComponent
        file={file}
        setFile={setFile}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default App;
