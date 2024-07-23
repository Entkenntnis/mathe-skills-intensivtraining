import { Exercise } from '@/data/types'
import { getGcd } from '@/helper/get-gcd'
import { buildFrac } from '@/helper/math-builder'
import clsx from 'clsx'

interface DATA {
  fracs: {
    z1: number
    n: number
    z2: number
    add: boolean
    n1: number
    n2: number
    r: number
  }[]
}

export const exercise12: Exercise<DATA> = {
  title: 'Brüche addieren und subtrahieren',
  useCalculator: false,
  duration: 4,
  generator(rng) {
    const fracs: DATA['fracs'] = []

    for (let i = 0; i < 3; i++) {
      const add =
        i == 1 ? !fracs[0].add : rng.randomItemFromArray([true, false])
      let n1 = rng.randomIntBetween(5, 11)
      let n2 = rng.randomIntBetween(5, 11)
      const n = (n1 * n2) / getGcd(n1, n2)
      let z1 = rng.randomIntBetween(1, n1)
      let z2 = rng.randomIntBetween(1, n2)
      if (!add && z1 / n1 + z2 / n2 < 0) {
        let t = n1
        n1 = n2
        n2 = t
        t = z1
        z1 = z2
        z2 = t
      }
      const r = z1 * n2 + z2 * n1
      fracs.push({ z1, z2, n, n1, n2, add, r })
    }

    return { fracs }
  },
  task({ data }) {
    return (
      <>
        <p>Berechne und kürze.</p>
        <p>
          {[0, 1, 2].map((id) => (
            <span className="mr-12" key={id}>
              {buildFrac(data.fracs[id].z1, data.fracs[id].n1)}{' '}
              <span className="text-xl">{data.fracs[id].add ? '+' : '−'} </span>
              {buildFrac(data.fracs[id].z2, data.fracs[id].n2)}
            </span>
          ))}
        </p>
      </>
    )
  },
  solution({ data }) {
    return (
      <>
        {[0, 1, 2].map((id) => {
          const { r, n, z1, z2, n1, n2, add } = data.fracs[id]
          const f = getGcd(r, n)
          return (
            <p key={id}>
              {buildFrac(z1, n1)}{' '}
              <span className="text-xl">{add ? '+' : '−'} </span>
              {buildFrac(z2, n2)} = {buildFrac(z1 * n2, n)}{' '}
              <span className="text-xl">{add ? '+' : '−'} </span>
              {buildFrac(z2 * n1, n)} ={' '}
              <span className={clsx(f == 1 && 'font-bold')}>
                {buildFrac(r, n)}
              </span>
              {f > 1 && (
                <>
                  {' '}
                  = <strong>{buildFrac(r / f, n / f)}</strong>
                </>
              )}
            </p>
          )
        })}
      </>
    )
  },
}
