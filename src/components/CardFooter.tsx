import { Button } from 'antd'

function CardFooter({ url }: { url: string }) {
  return (
    <Button
      type="link"
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#197BCD',
        margin: '10px 0',
      }}
      href={url}
    >
      Original Source
    </Button>
  )
}

export default CardFooter
