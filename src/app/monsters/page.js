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
    <main className="min-h-screen bg-gradient-to-br from-[#1b1b1b] to-[#2d1d32] py-10 px-6 md:px-12 text-white font-serif">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-yellow-100 mb-12 text-center drop-shadow-lg tracking-widest">
          📖 Arcane Bestiary
        </h1>

        <section className="">
          <Monsters initialData={data} />
        </section>
      </div>
    </main>
  );
}
