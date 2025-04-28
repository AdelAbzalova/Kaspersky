import { IData_SnippetNews } from '../models/models'
import MetaInfo from './MetaInfo'
import SourceInfo from './SourceInfo'
import Title from './Title'

function Header({ news }: { news: IData_SnippetNews }) {
  return (
    <>
      <MetaInfo
        date={news.DP}
        reach={news.REACH}
        traffic={news.TRAFFIC}
        sentiment={news.SENT}
      />
      <Title title={news.TI} />
      <SourceInfo
        dom={news.DOM}
        url={news.URL}
        lang={news.LANG}
        country={news.CNTR}
        authors={news.AU}
      />
    </>
  )
}

export default Header
