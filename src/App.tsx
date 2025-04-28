import Error from './components/Error'
import Loader from './components/Loader'
import NewsCard from './components/newsCard/NewsCard'
import { newsApi } from './services/news'

function App() {
  const { data, isError, isLoading } = newsApi.useGetNewsQuery()

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loader />}

      {data?.map(news => <NewsCard key={news.ID} news={news} />)}
    </>
  )
}

export default App
