import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Header/>

      <div className="max-w-[70rem] my-8 mx-auto py-4 px-0 grid grid-cols-[256px_1fr] gap-8 items-start">
        <aside> <Sidebar/> </aside>
        <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa ad, molestiae qui, ratione explicabo, fugit maiores exercitationem earum minus deserunt provident architecto. Quasi reiciendis ut aperiam eaque consequuntur est!</main>
      </div>
    </>
  )
}

export default App
