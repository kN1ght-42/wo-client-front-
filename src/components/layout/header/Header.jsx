import { useLayoutEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
    const { pathname } = useLocation()

    const navigate = useNavigate()

    const { isAuth } = useAuth()

    return (
        <header className={styles.header}>
            {isAuth && (
                <>
                    {pathname == '/' && isAuth ? (
                        <button
                            onClick={() => {
                                navigate('/profile')
                            }}
                        >
                            <FaUser fontSize={25} />
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                navigate(isAuth ? backLink : '/auth')
                            }}
                        >
                            <FiArrowLeft />
                        </button>
                    )}
                    <Hamburger />
                </>
            )}
        </header>
    )
}

export default Header
