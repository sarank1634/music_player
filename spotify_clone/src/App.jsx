import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-full flex">
        <Sidebar />
        {/* Main content will go here */}
      </div>
    </div>
  )
}

export default App
