import { useEffect, useState } from 'react'
import ArrowPathIcon from './ArrowPathIcon'
import ArrowLongRightIcon from './ArrowLongRightIcon'

const fetchRandomQuote = async () => {
  const response = await fetch(
    'https://quote-garden.onrender.com/api/v3/quotes/random'
  )
  const result = await response.json()
  return result
}

export default function App() {
  const [quote, setQuote] = useState()

  const getRandomQuote = () =>
    fetchRandomQuote().then((result) => setQuote(result.data[0]))

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <div className="min-h-screen flex flex-col gap-6 max-w-screen-xl p-4 mx-auto">
      <header className="flex justify-end mt-2">
        <button
          className="flex items-center gap-2 py-2 px-4 hover:bg-zinc-700 hover:text-white"
          onClick={getRandomQuote}
        >
          random <ArrowPathIcon className="w-4 h-4" />
        </button>
      </header>
      <div className="flex-1 max-w-screen-sm mx-auto flex flex-col gap-12 justify-center w-full">
        {quote && (
          <>
            <div className="text-3xl p-6 relative">
              &quot;{quote.quoteText}&quot;
              <div className="absolute top-0 bottom-0 -left-10 w-3 bg-yellow-300 my-6" />
            </div>
            <button className="px-6 py-8 text-zinc-500 group hover:bg-zinc-700 hover:text-white text-left">
              <div className="flex justify-between">
                <span className="text-xl font-bold">{quote.quoteAuthor}</span>
                <ArrowLongRightIcon className="text-transparent group-hover:text-white" />
              </div>
              <span className="text-sm text-zinc-400">{quote.quoteGenre}</span>
            </button>
          </>
        )}
      </div>
      <footer className="text-center text-sm text-zinc-500">
        created by <span className="font-bold underline">Tung Teng</span> -
        devChallenges.io
      </footer>
    </div>
  )
}
