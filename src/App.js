import './css/App.css';
import MenuBar from './components/MenuBar';
import FileExplorerSideBar from './components/SideBar/FileExplorerSideBar';
import PropTypes from 'prop-types'
import SearchSideBar from './components/SideBar/SearchSideBar'
import './css/MenuBar.css'



function App() {
  return (
    <>
      <MenuBar />
      <FileExplorerSideBar/>
      <SearchSideBar/>
    </>
  )
}

export default App;