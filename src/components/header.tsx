import subscribeIcon from '../assets/subscribe.svg'

export function Header() {
    return(
    <div className='flex items-center gap-5 py-2'> 
        <img className=" mt-3 size-10" src={subscribeIcon}/>

        <nav className='flex items-center gap-5'> 
        <span className='text-3xl font-bold'> Pass-In</span>
        </nav>
    </div>)
}