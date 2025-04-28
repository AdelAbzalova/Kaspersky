import { Typography } from 'antd'

function Title({ title }: { title: string }) {
  return (
    <Typography.Title level={4} style={{ color: '#197BCD', margin: 0 }}>
      {title}
    </Typography.Title>
  )
}

export default Title
