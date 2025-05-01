import Monsters from '@/components/Monsters'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getMonsters() {
    await sleep(500) // .5 second delay
    const res = await fetch('https://www.dnd5eapi.co/api/monsters', {
        next: { revalidate: 60 }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch monsters')
    }
    console.log('Server side fetch running...')

    return res.json()
}

export default async function MonstersPage() {
  const data = await getMonsters()

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Monster List (SSR + SWR)</h1>
      <Monsters initialData={data} />
    </main>
  )
}
