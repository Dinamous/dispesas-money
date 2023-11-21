
export default function Post() {
  return (
    <article className="bg-lightGray rounded-lg p-10">
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <img src="https://github.com/diego3g.png" className=" w-10 h-10 rounded-lg border border-4 border-gray-800 outline outline-2 outline-green"/>
                <div className="flex flex-col">
                    <strong>Diego Fernandes</strong>
                    <span className="text-gray-400 text-sm">Web Developer</span>
                </div>
            </div>
            <time title="11 de maio as 11:13" dateTime="2022-05-11 08:13:24" className="text-sm text-gray-400">Publicado há 1h</time>
        </header>
        <div className="leading-6 text-gray-400 mt-6">
            <p className="mt-4">Fala galera 👋</p>
            <p className="mt-4">Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW, evento da Rocketseat.</p>
            <p className="mt-4">👉 <a href="" className="font-bold text-green hover:text-green-300">jane.design/doctorcare</a> </p>
            <p className="mt-4"> 
                <a href="" className="font-bold text-green hover:text-green-300"> #novoprojeto</a>
                <a href="" className="font-bold text-green hover:text-green-300"> #nlw</a>
                <a href="" className="font-bold text-green hover:text-green-300"> #rocketseat</a>
            </p>
        </div>

        <form className="mt-6 pt-6 border-t border-gray-600 w-100">
            <strong className="leading-6 text-gray-100 ">Deixe seu comentário</strong>
            <textarea className="w-full mt-4 bg-gray-950 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-4 "
                placeholder="Deixe um comentário"></textarea>
                <button type="submit" 
                    className="py-4 px-6 mt-4 rounded-lg bg-green-500 hover:bg-green-300 font-bold cursor-pointer transition-all"
                >Comentar</button>
        </form>
    </article>
  )
}
