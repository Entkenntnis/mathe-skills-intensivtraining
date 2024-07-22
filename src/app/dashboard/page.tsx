'use client'

import { useApp } from '@/components/App'
import { Guard } from '@/components/Guard'
import { exercisesData } from '@/content/exercises'
import { goalsData } from '@/content/goals'
import {
  logout,
  populateDashboard,
  showExercise,
  triggerUpload,
} from '@/data/commands'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
  const app = useApp()
  const router = useRouter()

  if (!app.state.userData || !app.state.token) {
    return <Guard />
  }

  const goal = app.state.userData.goal

  return (
    <div>
      <h1 className="text-center text-5xl mt-12">Dashboard</h1>
      <div className="max-w-[600px] mx-auto mt-6">
        <div className="mt-6 mb-12 flex justify-between bg-gray-50 p-3 rounded-box">
          <p>
            Hallo {app.state.userData.name}!{' '}
            {app.state.uploading ? (
              <span className="badge badge-info ml-3">
                ... wird synchornisiert
              </span>
            ) : (
              <span className="badge badge-success badge-outline ml-3">
                Cloud verbunden
              </span>
            )}
          </p>
          <button
            className="btn btn-sm"
            onClick={() => {
              router.push('/')
              app.afterPush('/', () => {
                logout(app)
              })
            }}
          >
            Logout
          </button>
        </div>
        {goal === null && (
          <div>
            <p className="mt-8 font-bold">Der erste Schritt:</p>
            <p className="mt-6">
              <Link href="/goals" className="btn btn-primary">
                Lernziel auswählen
              </Link>
            </p>
          </div>
        )}
        {goal && (
          <>
            <div className="p-3 rounded bg-gray-50">
              <div className="flex justify-between">
                <p>
                  Dein Lernziel:{' '}
                  <span className="font-bold">{goalsData[goal].name}</span>
                </p>
                <Link href="/goals">
                  <button className="btn btn-sm">ändern</button>
                </Link>
              </div>
              <div className="mt-2 italic">{goalsData[goal].description}.</div>
              <div className="mt-4">
                Fortschritt: TODO (noch nicht genug Inhalte)
              </div>
              <progress
                className="progress w-full"
                value="0"
                max="100"
              ></progress>
            </div>
            <div className="mt-8">Jetzt üben:</div>
            <div className="flex flex-wrap justify-center gap-8 pt-6">
              {app.state.userData.dashboard.map((entry, i) => (
                <div
                  className="rounded bg-purple-50 w-full px-3 py-4 cursor-pointer hover:outline outline-primary outline-1 font-bold text-gray-700"
                  onClick={() => {
                    showExercise(app, entry.id, entry.seed, i)
                    router.push('/practice')
                  }}
                  key={entry.id + entry.seed}
                >
                  {exercisesData[entry.id].title}
                  <span className="badge badge-outline font-normal ml-3">
                    {exercisesData[entry.id].duration} min
                  </span>
                </div>
              ))}
            </div>
            {
              <div className="mt-12 text-center">
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    populateDashboard(app)
                    triggerUpload(app)
                  }}
                >
                  Neue Auswahl
                </button>
              </div>
            }
          </>
        )}
        <div className="h-[400px]"></div>
      </div>
    </div>
  )
}
