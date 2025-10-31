import React from 'react'
import { navlinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo" />

            <ul>
                {navlinks.map(({label}) => (
                        <li key={label}>
                            <a href= {label}>{label}</a>
                        </li>
                    ))}
            </ul>

            <div className='flex-centre gap-3'>
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>

                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>

            </div>
        </nav>
    </header>
    
  )
}

export default NavBar
