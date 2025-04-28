import Header from '../Header'
import { IData_SnippetNews } from '../../models/models'
import CardBody from '../CardBody'
import CardFooter from '../CardFooter'
import styles from './NewsCard.module.css'

function NewsCard({ news }: { news: IData_SnippetNews }) {
  return (
    <>
      <div className={styles.container}>
        <Header news={news} />
        <CardBody
          highlights={news.HIGHLIGHTS}
          content={news.AB}
          keyWords={news.KW}
        />
        <CardFooter url={news.URL} />
      </div>
    </>
  )
}

export default NewsCard
