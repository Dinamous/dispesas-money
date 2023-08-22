
import {PencilLine} from 'phosphor-react'

function Sidebar() {
  return (
    <aside className="bg-lightGray rounded-lg overflow-hidden">
        <img className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="banner" />
        <div className="flex flex-col items-center -mt-8">
            <img src="https://github.com/Dinamous.png" className=" w-16 h-16 rounded-lg border border-4 border-gray-800 outline outline-2 outline-green"/>
            <strong className="mt-4 text-gray- leading-6"> Matheus Simões</strong>
            <span className="text-[0.875rem] text-gray-400 leading-6">Front-end</span>
        </div>

        <footer className="border-t-[1px] border-t-gray-700 mt-6 pt-6 px-8 pb-8">
            <a href="" className="gap-2 bg-transparent text-green border border-[1px] border-green rounded-lg h-12 font-bold block py-4 flex items-center justify-center bg-transparent transition-colors duration-200 ease-in-out hover:bg-green hover:text-white" >
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}

export default Sidebar