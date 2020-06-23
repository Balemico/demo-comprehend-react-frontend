import React, { useState } from 'react';
import Dropzone from 'react-dropzone-uploader'

import { UPLOAD_API } from '../../api/config';

import 'react-dropzone-uploader/dist/styles.css'
import './FileUpload.css';

const FileUpload = (props) => {
  const [fileMeta, setFileMeta] = useState();
  const [message, setMessage] = useState('');
  const { onUserUpload } = props;

  const getUploadParams = () => {
    return { url: UPLOAD_API }
  }

  const handleChangeStatus = ({ meta, remove, xhr }, status) => {
    console.log(status, meta)
    if (status === 'preparing') {
      onUserUpload();
    } else if (status === 'headers_received') {
      setFileMeta(meta);
    } else if (status === 'done') {
      console.log('OK, vediamo cosa abbiamo qui')
      onUserUpload(xhr.response);
      remove();
    } else if (status === 'error_upload') {
      setMessage(`The file contains too much text to process. Please retry again with another file.`)
    } else if (status === 'aborted') {
      setMessage(`Upload not completed`)
    } else {
      setMessage('')
    }
  }

  return (
    <section>
      {message ? <div className="uploadMessage">{message}</div> : null}
      <Dropzone
        className='dropzone'
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        accept="application/pdf"
        inputContent={fileMeta ? fileMeta.name + " uploaded" : "Drop A File"}
      />
    </section>
  );
}

export default FileUpload;