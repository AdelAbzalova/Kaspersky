import { Flex, Tag } from 'antd'
import { IData_TrafficItem } from '../models/models'

interface MetaInfoProps {
  date: string
  reach: number
  traffic: IData_TrafficItem[]
  sentiment: string
}

function MetaInfo({ date, reach, traffic, sentiment }: MetaInfoProps) {
  const tagColor =
    sentiment.toLowerCase() === 'negative' ? '#E24D43' : '#23FFB0'
  const d = new Date(date)
  const formattedDate = d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  const formattedReach = reach > 1000 ? Math.round(reach / 1000) : reach
  console.log(formattedDate)

  return (
    <>
      <Flex justify="space-between">
        <Flex gap="middle">
          <div>
            <span className="highlights">{formattedDate.slice(0, 2)}</span>
            {formattedDate.slice(2)}
          </div>
          <div>
            <span className="highlights">
              {formattedReach}
              {reach > 1000 && 'K'}
            </span>{' '}
            Reach
          </div>
          <Flex gap="small">
            Top traffic:
            {traffic.map((item, index) => (
              <div key={index}>
                {item.value}{' '}
                <span className="highlights">
                  {Math.round(item.count * 100)}%
                </span>
              </div>
            ))}
          </Flex>
        </Flex>

        <div>
          <Tag color={tagColor} style={{ color: 'black' }}>
            {sentiment}
          </Tag>
        </div>
      </Flex>
    </>
  )
}

export default MetaInfo
