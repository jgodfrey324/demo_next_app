'use client'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function UserList() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  if (isLoading) return <div className="text-gray-500">Loading...</div>
  if (error) return <div className="text-red-500">Error loading users.</div>

  return (
    <ul className="p-4 space-y-2">
      {data.map((user) => (
        <li key={user.id} className="bg-white shadow p-4 rounded">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  )
}
