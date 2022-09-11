import { useState } from 'react';
import './App.css';

function App() {
  const [drag, setDrag] = useState(false)
  const dragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  }
  const dragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }
  const onDropHandler = (e) => {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    const formData = new FormData()
    formData.append('file', files[0])
    console.log(files)
    setDrag(false)
  }
  return (
    <div className="App">
      {drag
        ? <div
          className='drop-area'
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop={e => onDropHandler(e)}
        >Drop here, to upload file</div>
        : <div
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
        >Move uploading file here</div>
      }    
    </div>
  );
}

export default App;
