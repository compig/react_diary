import Header from '@/components/Header'
import Button from '@/components/Button'
import Editor from '@/components/Editor'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DiaryDispatchContext } from '@/App'

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext)
  console.log(onCreate)
  const nav = useNavigate()
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content)
    nav('/', { replace: true })
  }
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로가기'} />}
        // rightChild={<Button text={'> 앞으로가기'} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
}

export default New
