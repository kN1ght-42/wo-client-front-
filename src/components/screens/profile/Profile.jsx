import cn from 'clsx'
import React from 'react'

import Loader from '../../ui/loader/Loader'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

import styles from './Profile.module.scss'
import Statistics from './statistics/Statistics'
import { useProfile } from './useProfile'

const Profile = () => {
    const { data, isLoading } = useProfile()

    return (
        <>
            <div
                className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
                style={{
                    backgroundImage: `url('/public/images/images/profile-bg.jpg')`,
                    height: 356
                }}
            >
                <Header />

                <div className={styles.center}>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <img
                                src="/public/images/images/header/user.svg"
                                alt="Profile"
                                height={56}
                                draggable={false}
                            />
                            <h1 className={stylesLayout.heading}>
                                {data?.email}
                            </h1>
                        </>
                    )}
                </div>
                <Statistics />
            </div>
            <div
                className="wrapperInnerPage"
                style={{ paddingLeft: 0, paddingRight: 0 }}
            >
                <div className={styles.before_after}>
                    {data?.images?.map((image, index) => (
                        <div key={image}>
                            <div className={styles.heading}>
                                {index === 1 ? 'After' : 'Before'}
                            </div>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Profile
