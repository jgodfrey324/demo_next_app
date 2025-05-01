'use client'

import Image from 'next/image'
// import useSWR from 'swr'
import { useState } from 'react'

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// const fetcher = async (url) => {
//     await sleep(500) // .5-second delay
//     const res = await fetch(url)
//     console.log('Client side details Fetcher running...')
//     return res.json()
// }

export default function MonsterDetails({ initialData }) {
//   const { data, error, isLoading } = useSWR(
//     `https://www.dnd5eapi.co/api/monsters/${initialData.index}`,
//     fetcher,
//     {
//       fallbackData: initialData,
//       revalidateOnFocus: true,
//     }
//   )
  const [imageLoading, setImageLoading] = useState(true)

//   if (isLoading) return <div>Loading...</div>
//   if (error) return <div className="text-red-500">Failed to load monster.</div>

  const monster = initialData
  const monsterActions = monster.actions.map(action => action.name).join(", ")

return (
    <main className="bg-[#f9f3e9] border-4 border-yellow-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-[#2b1d0e] font-serif">
      {/* Name */}
      <h2 className="text-3xl font-bold mb-4 text-center text-red-900 drop-shadow-md border-b-2 border-yellow-700 pb-2">
        {monster.name}
      </h2>

      {/* Image with loading spinner */}
      <div className="mb-4 relative">
            {imageLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-90 z-10 rounded-lg">
                    <div className="relative flex justify-center items-center">
                    {/* Glowing Energy Ring Animation */}
                    <div className="absolute w-32 h-32 border-4 border-t-transparent border-blue-500 rounded-full animate-spin-fast"></div>
                
                    {/* Main Orb */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full absolute animate-orb-spin"></div>
                
                    {/* Floating Glowing Particles */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-pink-600 rounded-full animate-pulse-slow"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-yellow-500 to-pink-600 rounded-full animate-pulse-slow"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-pink-600 rounded-full animate-pulse-slow"></div>
                    </div>
                </div>
            )}
        {/* Placeholder image for now */}
        {monster.image ?
            <Image
            src={`https://www.dnd5eapi.co${monster.image}`}
            alt={`Illustration of ${monster.name}`}
            width={600}
            height={400}
            className="rounded object-cover"
            onLoadingComplete={() => setImageLoading(false)}
            />
        :
            <Image
            src={`https://placehold.co/600x400?text=${encodeURIComponent(monster.name)}`}
            alt={`Illustration of ${monster.name}`}
            width={600}
            height={400}
            className="rounded object-cover"
            onLoadingComplete={() => setImageLoading(false)}
            />
        }
      </div>

      {/* Actions */}
      <p className="italic text-yellow-900 mb-6 text-lg">
        <span className="font-semibold text-[#42210b]">Actions:</span> {monsterActions}
      </p>

      {/* Stacked Info Sections */}
      <section className="flex flex-col gap-6 mt-6">
        {/* Lore */}
        <div className="bg-yellow-100 rounded-lg p-6 border-2 border-yellow-700 shadow-inner w-full">
          <h3 className="text-xl font-bold mb-3 text-yellow-900 border-b border-yellow-700 pb-2 tracking-wide">
            📜 Lore
          </h3>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-8 text-base">
            <li><strong>Size:</strong> {monster.size}</li>
            <li><strong>Type:</strong> {monster.type}</li>
            <li><strong>Alignment:</strong> {monster.alignment}</li>
            <li><strong>Languages:</strong> {monster.languages}</li>
          </ul>
        </div>

        {/* Vital Stats */}
        <div className="bg-yellow-100 rounded-lg p-6 border-2 border-yellow-700 shadow-inner w-full">
          <h3 className="text-xl font-bold mb-3 text-yellow-900 border-b border-yellow-700 pb-2 tracking-wide">
            🩸 Vital Stats
          </h3>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-8 text-base">
            <li><strong>HP:</strong> {monster.hit_points}</li>
            <li><strong>XP:</strong> {monster.xp ?? 'N/A'}</li>
            <li><strong>Challenge Rating:</strong> {monster.challenge_rating}</li>
          </ul>
        </div>

        {/* Abilities */}
        <div className="bg-yellow-100 rounded-lg p-6 border-2 border-yellow-700 shadow-inner w-full">
          <h3 className="text-xl font-bold mb-3 text-yellow-900 border-b border-yellow-700 pb-2 tracking-wide">
            💪 Abilities
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center text-base font-semibold text-yellow-900">
            <div className="bg-yellow-200 rounded-md p-2 border border-yellow-700 shadow-sm">
              STR<br /><span className="text-xl text-black">{monster.strength}</span>
            </div>
            <div className="bg-yellow-200 rounded-md p-2 border border-yellow-700 shadow-sm">
              DEX<br /><span className="text-xl text-black">{monster.dexterity}</span>
            </div>
            <div className="bg-yellow-200 rounded-md p-2 border border-yellow-700 shadow-sm">
              CON<br /><span className="text-xl text-black">{monster.constitution}</span>
            </div>
            <div className="bg-yellow-200 rounded-md p-2 border border-yellow-700 shadow-sm">
              INT<br /><span className="text-xl text-black">{monster.intelligence}</span>
            </div>
            <div className="bg-yellow-200 rounded-md p-2 border border-yellow-700 shadow-sm">
              WIS<br /><span className="text-xl text-black">{monster.wisdom}</span>
            </div>
            <div className="bg-yellow-200 rounded-md p-2 border border-yellow-700 shadow-sm">
              CHA<br /><span className="text-xl text-black">{monster.charisma}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
