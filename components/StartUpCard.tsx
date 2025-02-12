import { formateDate } from "@/lib/utils"

const StartUpCard = ({post}: {post: StartUpCardType}) => {
  return (
    <li className='startup-card'>
      <div className='flex-between'>
        <p className='startup_card_date'>
          {formateDate(post.createdAt)}
        </p>
      </div>
      
    </li>
  )
}

export default StartUpCard
