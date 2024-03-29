import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

import workoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutService from '../../../../services/workout/workout.service'

export const useWorkouts = () => {
    const { data, isSuccess } = useQuery(
        ['get workouts'],
        () => WorkoutService.getAll(),
        {
            select: data => data.data
        }
    )

    const nav = useNavigate()

    const {
        mutate,
        isLoading,
        isSuccess: isSuccessMutate,
        error
    } = useMutation(
        ['create new workout log'],
        workoutId => workoutLogService.create(workoutId),
        {
            onSuccess({ data }) {
                nav(`/workout/${data.id}`)
            }
        }
    )

    return useMemo(() => ({
        data,
        isSuccess,
        mutate,
        isLoading,
        isSuccessMutate,
        error
    }))
}
