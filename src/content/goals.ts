import { GoalData } from '@/data/types'
import { exercisesData } from './exercises'

export const goalsData: { [key: number]: GoalData } = {
  1: {
    name: 'Fit für die 7. Klasse',
    description:
      'Wiederholung der wichtigsten Grundlagen aus der 5. und 6. Klasse',
    exercises: [1, 2, 3, 4, 5],
  },
  99: {
    name: 'Gesamter Katalog',
    description: 'Übe alle verfügbaren Aufgaben',
    exercises: Object.keys(exercisesData).map(parseInt),
  },
}
