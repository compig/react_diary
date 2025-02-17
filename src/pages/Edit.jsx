import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'

const Edit = () => {
  const params = useParams()
  return (
    <div>
      <Header title={'일기 수정하기'}/>
    </div>
  )
}

export default Edit
