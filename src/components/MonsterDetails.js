// 'use client's

import Image from 'next/image'
import useSWR from 'swr'
// import { useState } from 'react'

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
//   const [imageLoading, setImageLoading] = useState(true)

//   if (isLoading) return <div>Loading...</div>
//   if (error) return <div className="text-red-500">Failed to load monster.</div>

  const monster = initialData
  const monsterActions = monster.actions.map(action => action.name).join(", ")

//   {imageLoading && (
//     <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
//         {/* Loading Spinner */}
//         <svg className="w-10 h-10 text-gray-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 118 8 8 8 0 01-8-8z"></path>
//         </svg>
//     </div>
// )}


  return (
    <main className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{monster.name}</h2>
      <div className="mb-2 relative">
        
        {/* Placeholder image for now */}
        {monster.image ?
            <Image
            src={`https://www.dnd5eapi.co${monster.image}`}
            alt={`Illustration of ${monster.name}`}
            width={600}
            height={400}
            className="rounded object-cover"
            // onLoadingComplete={() => setImageLoading(false)}
            />
        :
            <Image
            src={`https://placehold.co/600x400?text=${encodeURIComponent(monster.name)}`}
            alt={`Illustration of ${monster.name}`}
            width={600}
            height={400}
            className="rounded object-cover"
            // onLoadingComplete={() => setImageLoading(false)}
            />
        }
      </div>
      <p className="italic text-gray-700 mb-6">Actions can perform: {monsterActions}</p>
      <section className='grid grid-cols-2 gap-2'>
        <div className="col-span-1">
            <div><strong>Size:</strong> {monster.size}</div>
            <div><strong>Type:</strong> {monster.type}</div>
            <div><strong>Alignment:</strong> {monster.alignment}</div>
            <div><strong>Languages:</strong> {monster.languages}</div>
            <div><strong>HP:</strong> {monster.hit_points}</div>
            <div><strong>XP:</strong> {monster.xp ?? 'N/A'}</div>
        </div>
        <div className="col-span-1">
            <div><strong>Challenge Rating:</strong> {monster.challenge_rating}</div>
            <div><strong>Strength:</strong> {monster.strength}</div>
            <div><strong>Dexterity:</strong> {monster.dexterity}</div>
            <div><strong>Constitution:</strong> {monster.constitution}</div>
            <div><strong>Intelligence:</strong> {monster.intelligence}</div>
            <div><strong>Wisdom:</strong> {monster.wisdom}</div>
            <div><strong>Charisma:</strong> {monster.charisma}</div>
        </div>
      </section>
      
    </main>
  )
}
