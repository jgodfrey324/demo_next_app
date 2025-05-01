// 'use client'

import Link from 'next/link'
// import useSWR from 'swr'

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// const fetcher = async (url) => {
//     await sleep(500) // .5-second delay
//     const res = await fetch(url)
//     console.log('Client side Fetcher running...')
//     return res.json()
// }

export default function Monsters({ initialData }) {
//   const { data, error, isLoading } = useSWR(
//     'https://www.dnd5eapi.co/api/monsters',
//     fetcher,
//     {
//       fallbackData: initialData, // use SSR data first
//       revalidateOnFocus: true,   // re-fetch on tab focus
//     }
//   )

//   if (isLoading) return <div className="text-gray-500">Loading...</div>
//   if (error) return <div className="text-red-500">Failed to load monsters</div>

  const monsters = initialData.results

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {monsters.map((monster) => (
        <Link
          href={`/monsters/${monster.index}`}
          key={monster.index}
          className="block bg-white rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition-all p-5 border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800">{monster.name}</h2>
        </Link>
      ))}
    </main>
  )
}
