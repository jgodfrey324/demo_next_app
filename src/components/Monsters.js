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
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {monsters.map((monster) => (
            <Link
            key={monster.index}
            href={`/monsters/${monster.index}`}
            className="group relative block rounded-xl p-6 border-4 border-purple-800 bg-gradient-to-br from-[#f3e9dc] to-[#e7d6ba] shadow-[0_0_15px_rgba(183,135,255,0.2)] hover:shadow-[0_0_25px_rgba(255,220,128,0.6)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Monster Name */}
            <h2 className="text-2xl font-extrabold text-purple-900 group-hover:text-red-800 tracking-wide text-center drop-shadow-md">
              {monster.name}
            </h2>
          
            {/* Decorative underline */}
            <div className="mt-4 h-1 w-16 mx-auto bg-purple-800 rounded group-hover:bg-red-800 transition-colors" />
          
            {/* Tooltip or subtext */}
            <p className="mt-3 text-sm text-center text-gray-700 italic">
              Tap to view details...
            </p>
          
            {/* Floating sparkle emoji or arcane glyph */}
            <div className="absolute top-2 right-2 text-yellow-700 text-xl group-hover:animate-pulse">
              ✨
            </div>
          </Link>
          
        ))}
    </main>
  )
}
