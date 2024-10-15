
import './App.css';
import React from 'react'
import DataFetchingComponent from './ExternalDataFetchingComponents/DataFetching';
import TextSearchHighlight from './TextSearchandHighlighCompoent/TextSearchHighlight';
import FileDownload from './FileDownloadComponent/FileDownload';
import QuizApp from './QuizAppComponent/QuizApp'
import TaskManager from './TaskManagementComponents/TaskManager';


const App = () => {
  return (
    <div>
      <DataFetchingComponent />
      <hr style={{marginTop:"50px"}} />

      <TextSearchHighlight />
      <hr style={{marginTop:"50px"}} />

      <FileDownload />
      <hr  style={{marginTop:"50px"}}/>

      <QuizApp />
      <hr  style={{marginTop:"50px"}}/>

      <TaskManager />
      <hr  style={{marginTop:"50px"}}/>

      
      
    </div>
  )
}

export default App