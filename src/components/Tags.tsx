import { Flex } from 'antd'
import { IData_TagItem } from '../models/models'
function Tags({ keyWords }: { keyWords: IData_TagItem[] }) {
  return (
    <>
      <Flex gap="small" style={{ margin: '10px 0' }}>
        {keyWords.map((keyWord, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #28282b',
              borderRadius: '15px',
              padding: '1px 10px',
              fontSize: '12px',
            }}
          >
            {keyWord.value}
            <span className="highlights"> {keyWord.count}</span>
          </div>
        ))}
      </Flex>
    </>
  )
}

export default Tags
