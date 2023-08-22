
import IgniteLogo from '../assets/ignite-logo.svg'

export default function Header() {
  return (
    <header className="h-16 flex justify-center items-center bg-lightGray gap-4">

        <img  alt="Ignite Logo" src={IgniteLogo} className='h-10'/>
        <strong  >Ignite Feed</strong>
    </header>
  )
}
