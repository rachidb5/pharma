import { useRouter } from 'next/router'
import Modal from 'react-modal'

const PostPage = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
  <Modal
  isOpen={!!router.query.userId}
  onRequestClose={() => router.push('/')}
  contentLabel="User modal"
>
  <div>
      this is my id: {userId}
  </div>
  </Modal>
  )
}

export default PostPage