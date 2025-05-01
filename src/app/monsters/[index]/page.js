import MonsterDetails from '@/components/MonsterDetails'
import Link from 'next/link'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getMonster(index) {
    // await sleep(500) // .5 second delay
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
    <main className="min-h-screen bg-gray-100 p-8">
      <Link href="/monsters" className="text-blue-500 hover:underline">
        Back
      </Link>
      <MonsterDetails initialData={monster} />
    </main>
  )
}
