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
    <main className="min-h-screen bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Monster List</h1>
        <Monsters initialData={data} />
      </div>
    </main>
  )
}
