import { useRouter } from 'next/router'
import Modal from 'react-modal';
import User from '../../components/User'

const PostPage = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Modal
      isOpen={!!router.query.userId}
      onRequestClose={() => router.push('/')}
      contentLabel="User modal"
    >
      <User 
        isOpen={!!router.query.userId} 
        close={() => router.push('/')} 
        userId={router.query.userId}
      />
    </Modal>
  )
}

export default PostPage