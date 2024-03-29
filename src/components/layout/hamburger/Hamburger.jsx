import { useClickAway } from '@uidotdev/usehooks'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
    const [isShow, setIsShow] = useState(false)

    const ref = useClickAway(() => {
        setIsShow(false)
    })

    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? <IoClose /> : <CgMenuRight />}
            </button>
            <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
    )
}

export default Hamburger
