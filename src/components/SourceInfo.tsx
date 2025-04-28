import { ReadOutlined, UserOutlined } from '@ant-design/icons'
import { Flex } from 'antd'

interface SourceInfoProps {
  dom: string
  url: string
  lang: string
  country: string
  authors: string[]
}

function SourceInfo({ dom, url, lang, country, authors }: SourceInfoProps) {
  return (
    <>
      <Flex
        justify="flex-start"
        align="flex-start"
        gap="middle"
        style={{ margin: '5px 0 10px' }}
      >
        <div>
          <a href={url}>{dom}</a>
        </div>
        <div>{country}</div>
        <div>
          <ReadOutlined />
          <span> {lang}</span>
        </div>
        <Flex>
          <UserOutlined />

          {authors.map((author, index) => (
            <div key={index}>{author}</div>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default SourceInfo
