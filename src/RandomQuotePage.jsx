import ArrowLongRightIcon from './ArrowLongRightIcon'

const RandomQuotePage = ({ quote, setAuthor }) => {
  return (
    <div className="flex flex-col gap-12 my-20">
      {quote && (
        <>
          <div className="text-3xl p-6 relative">
            &quot;{quote.quoteText}&quot;
            <div className="absolute top-0 bottom-0 -left-10 w-2 bg-yellow-300/90 my-6" />
          </div>
          <button
            className="px-6 py-8 text-zinc-500 group hover:bg-zinc-700 hover:text-white text-left"
            onClick={() => setAuthor(quote.quoteAuthor)}
          >
            <div className="flex justify-between">
              <span className="text-xl font-bold">{quote.quoteAuthor}</span>
              <ArrowLongRightIcon className="text-transparent group-hover:text-white" />
            </div>
            <span className="text-sm text-zinc-400">{quote.quoteGenre}</span>
          </button>
        </>
      )}
    </div>
  )
}

export default RandomQuotePage
