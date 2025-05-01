import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Link href="/monsters" className="text-blue-500 hover:underline">
        Go to Monster List
      </Link>
    </main>
  )
}
