// import { useMutation } from '@tanstack/react-query'
// import { useMemo } from 'react'
// import { useForm } from 'react-hook-form'

// import ExerciseService from '../services/exercise/exercise.service'

// export const useExercisePage = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//         control
//     } = useForm({
//         mode: 'onChange'
//     })

//     const { isSuccess, error, isLoading, mutate } = useMutation(
//         ['create exercise'],
//         body => ExerciseService.create(body),
//         {
//             onSuccess: () => {
//                 reset()
//             }
//         }
//     )

//     const onSubmit = data => {
//         mutate(data)
//     }

//     return useMemo(
//         () => ({
//             onSubmit,
//             register,
//             handleSubmit,
//             errors,
//             control
//         }),
//         [isSuccess, error, isLoading, mutate]
//     )
// }
