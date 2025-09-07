import './Footer.css'
import { useState, useEffect } from 'react'



export default function Footer() {
    const [isSticky, setIsSticky] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 100) {

            setIsSticky(true)

        } else {

            setIsSticky(false)

        }
    }

    const navItems = [
        { label: '📈Incre', id: 'incre' },
        { label: '💘Favourites', id: 'favourites' },
        { label: '👨‍💻Code🧩', id: 'code' },
        { label: 'Anime', id: 'anime' },
        { label: '🎧Music', id: 'music' },
        { label: '📚Books', id: 'books' }
    ]

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <footer className={`footer ${isSticky ? 'sticky' : ''} bg-gray-800 text-white py-4 px-6 flex`}>

                <nav>
                    <ul className='grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left'>
                        {navItems.map((item) => (
                            <li key={item.id} className='hover:text-blue-400 transition-colors duration-300'>
                                <a href={`#${item.id}`} onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </footer>
        </>
    )
}


