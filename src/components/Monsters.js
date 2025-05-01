'use client'


import useSWR from 'swr'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const fetcher = async (url) => {
    await sleep(500) // .5-second delay
    const res = await fetch(url)
    console.log('Client side Fetcher running...')
    return res.json()
}

export default function Monsters({ initialData }) {
  const { data, error, isLoading } = useSWR(
    'https://www.dnd5eapi.co/api/monsters',
    fetcher,
    {
      fallbackData: initialData, // use SSR data first
      revalidateOnFocus: true,   // re-fetch on tab focus
    }
  )

  if (isLoading) return <div className="text-gray-500">Loading...</div>
  if (error) return <div className="text-red-500">Failed to load monsters</div>

  const monsters = initialData.results

  return (
    <ul className="space-y-2">
      {monsters.map((monster) => (
        <li
          key={monster.index}
          className="bg-white rounded shadow p-4 hover:bg-gray-50 transition"
        >
          <p className="text-lg font-semibold">{monster.name}</p>
          <a
            href={`https://www.dnd5eapi.co${monster.url}`}
            target="_blank"
            className="text-blue-600 text-sm underline"
          >
            View API
          </a>
        </li>
      ))}
    </ul>
  )
}
