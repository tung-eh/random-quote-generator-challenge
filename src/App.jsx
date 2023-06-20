import { useEffect, useState } from 'react'
import RandomQuotePage from './RandomQuotePage'
import AuthorQuotesPage from './AuthorQuotesPage'
import ArrowPathIcon from './ArrowPathIcon'

const fetchRandomQuote = async () => {
  const response = await fetch(
    'https://quote-garden.onrender.com/api/v3/quotes/random'
  )
  const result = await response.json()
  return result
}

export default function App() {
  const [author, setAuthor] = useState()
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
          onClick={() => {
            getRandomQuote()
            setAuthor(undefined)
          }}
        >
          random <ArrowPathIcon className="w-4 h-4" />
        </button>
      </header>
      <div className="flex-1 max-w-screen-sm mx-auto flex items-center w-full">
        {author ? (
          <AuthorQuotesPage author={author} />
        ) : (
          <RandomQuotePage quote={quote} setAuthor={setAuthor} />
        )}
      </div>
      <footer className="text-center text-sm text-zinc-500">
        created by <span className="font-bold underline">Tung Teng</span> -
        devChallenges.io
      </footer>
    </div>
  )
}
