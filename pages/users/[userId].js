import { useRouter } from 'next/router'

const PostPage = () => {
  const router = useRouter()
  const { userId } = router.query

  return <div>
      this is my id: {userId}
  </div>
}

export default PostPage