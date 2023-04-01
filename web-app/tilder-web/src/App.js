import './css/App.css';
import MenuBar from './components/MenuBar';
import FileExplorerSideBar from './components/SideBar/FileExplorerSideBar';
import PropTypes from 'prop-types'
import SearchSideBar from './components/SideBar/SearchSideBar'
import './css/MenuBar.css'
import ReactDOM from "react-dom";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

function App() {
  return (
    <>
      <MenuBar />
      <FileExplorerSideBar />
      <SearchSideBar />
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </>
  )
}

export default App;