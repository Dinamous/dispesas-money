import Header from "./components/Header"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Header/>

      <div className="max-w-[70rem] my-8 mx-auto py-4 px-0 grid grid-cols-[256px_1fr] gap-8 items-start">
        <aside> <Sidebar/> </aside>
        <main className="space-y-6">
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </>
  )
}

export default App
