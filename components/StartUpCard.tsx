import { formateDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
const StartUpCard = ({ post }: { post: StartUpCardType }) => {
  const {
    createdAt,
    views,
    author: { id: authorId, name },
    id,
    title,
    category,
    image,
    description,
  } = post;
  return (
    <li className="startup-card">
      <div className="flex-between">
        <p className="startup_card_date">{formateDate(createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/users/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${id}`}>
            <p className="text-3xl font-medium line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <img
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${id}`}>
        <p className="startup-card_des">{description}</p>
        <img src={image} className="startup-card_img" alt="" />
      </Link>
      <div className="flex-between gap-3 mt-3">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartUpCard;
