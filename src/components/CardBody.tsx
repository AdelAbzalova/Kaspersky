import Tags from './Tags'
import { IData_TagItem } from '../models/models'
import { Button, Flex, Tag } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface CardBodyProps {
  highlights: string[]
  content: string
  keyWords: IData_TagItem[]
}

function CardBody({ highlights, content, keyWords }: CardBodyProps) {
  const [isHighlights, setIsHighlights] = useState(true)
  function showMore() {
    setIsHighlights(false)
  }
  return (
    <>
      <Flex vertical align="flex-start">
        {isHighlights ? (
          <>
            <div style={{ color: 'white' }}>
              {highlights.map((highlight, index) => (
                <span key={index}>{parseKwTags(highlight)};</span>
              ))}
            </div>

            <Button type="link" style={{ padding: 0 }} onClick={showMore}>
              Show more <CaretDownOutlined />{' '}
            </Button>
          </>
        ) : (
          <div>{content}</div>
        )}

        <Tags keyWords={keyWords} />
      </Flex>
    </>
  )
}

export default CardBody

function parseKwTags(text: string) {
  const regex = /(<kw>.*?<\/kw>)/g
  const parts = text.split(regex)

  return parts.map((part, index) => {
    if (part.startsWith('<kw>') && part.endsWith('</kw>')) {
      const keyword = part.slice(4, -5)
      return (
        <Tag
          color="#0772CB"
          key={index}
          className="bg-yellow-200 font-semibold rounded px-1"
        >
          {keyword}
        </Tag>
      )
    }
    return <span key={index}>{part}</span>
  })
}
