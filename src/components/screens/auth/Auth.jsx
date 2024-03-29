import { useAuthPage } from '../../../hooks/useAuthPage'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'

const Auth = () => {
    const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
        useAuthPage()

    return (
        <>
            <Layout
                heading="Sign in"
                bgImage="/public/images/images/auth-bg.png"
            />
            <div className={styles.wrapperInnerPage}>
                {isLoading && <Loader />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        error={errors?.email?.message}
                        type="text"
                        name="email"
                        register={register}
                        placeholder="Enter email"
                        options={{
                            required: 'Email is required'
                        }}
                    />
                    <Field
                        error={errors?.password?.message}
                        type="password"
                        name="password"
                        register={register}
                        placeholder="Enter password"
                        options={{
                            required: 'Password is required'
                        }}
                    />
                    <div className={styles.wrapperButtons}>
                        <Button clickHandler={() => setType('login')}>
                            Sign in
                        </Button>
                        <Button clickHandler={() => setType('register')}>
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Auth
