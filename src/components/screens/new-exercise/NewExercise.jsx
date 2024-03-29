import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import ExerciseService from '../../../services/exercise/exercise.service'
import Layout from '../../layout/Layout'

import styles from './NewExercise.module.scss'
import { getIconPath } from './image-path.util'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
    return (
        <>
            <Layout
                bgImage="/public/images/images/new-exercise-bg.jpg"
                heading="Create new exercise"
                backLink="/new-workout"
            />
            <div className={styles.wrapperInnerPage}>
                {error && <Alert type="error" text={error} />}
                {isSuccess && <Alert text="Exercise created" />}
                {isLoading && <Loader />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        error={errors?.name?.message}
                        type="text"
                        name="name"
                        register={register}
                        placeholder="Enter name"
                        options={{
                            required: 'Name is required'
                        }}
                    />
                    <Field
                        error={errors?.times?.message}
                        type="times"
                        name="times"
                        register={register}
                        placeholder="Enter times"
                        options={{
                            valueAsNumber: true,
                            validate: value =>
                                value > 0 || 'Times must be number',
                            required: 'times is required'
                        }}
                    />
                    <Controller
                        name="iconPath"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <div className={styles.images}>
                                {data.map(name => (
                                    <img
                                        key={`ex img ${name}`}
                                        src={`${
                                            import.meta.env.VITE_SERVER_URL
                                        }${getIconPath(name)}`}
                                        alt={name}
                                        className={cn({
                                            [styles.active]:
                                                value === getIconPath(name)
                                        })}
                                        onClick={() =>
                                            onChange(getIconPath(name))
                                        }
                                        draggable={false}
                                        height={20}
                                    />
                                ))}
                            </div>
                        )}
                    />
                    {errors?.iconPath && (
                        <div className="error">{errors?.iconPath?.message}</div>
                    )}

                    <Button>Create</Button>
                </form>
            </div>
        </>
    )
}

export default NewExercise
