import MonsterDetails from '@/components/MonsterDetails'
import Link from 'next/link'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getMonster(index) {
    await sleep(500) // .5 second delay
    const res = await fetch(`https://www.dnd5eapi.co/api/monsters/${index}`, {
        next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error('Failed to fetch monster')
    console.log('Server side detail fetch running...')
    return res.json()
}

export default async function MonsterPage({ params }) {
  const monster = await getMonster(params.index)

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1b1b1b] to-[#2d1d32] p-8 text-white font-serif">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/monsters"
          className=""
        >
          <button className="px-6 py-3 text-lg font-semibold text-white bg-transparent border-2 border-transparent rounded-md transition-all duration-300 ease-in-out transform hover:bg-purple-800 hover:border-purple-600 hover:text-yellow-200 focus:outline-none shadow-md hover:shadow-xl">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-30 blur-md group-hover:opacity-60 group-hover:blur-lg transition-all duration-300" />
            <span className="relative z-10 group-hover:text-yellow-200">Back</span>
          </button>
        </Link>

        {/* Monster Details */}
        <MonsterDetails initialData={monster} />
      </div>
    </main>
  )
}
