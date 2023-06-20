import { useState, useEffect } from 'react'

const fetchQuotesByAuthor = async (author) => {
  const response = await fetch(
    `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`
  )
  const result = await response.json()
  return result
}

const AuthorQuotesPage = ({ author }) => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetchQuotesByAuthor(author).then((result) => setQuotes(result.data))
  }, [])

  return (
    <div className="flex flex-col gap-20 mb-20">
      <h1 className="text-3xl font-bold text-zinc-700 p-6">{author}</h1>
      {quotes.map((quote) => (
        <div key={quote.id} className="text-3xl p-6 relative">
          &quot;{quote.quoteText}&quot;
          <div className="absolute top-0 bottom-0 -left-10 w-2 bg-yellow-300/90 my-6" />
        </div>
      ))}
    </div>
  )
}

export default AuthorQuotesPage
