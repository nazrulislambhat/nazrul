import { Star, StarHalf } from 'lucide-react';

type StarRatingProps = {
  filled: number;
  total?: number;
  filledColor?: string;
  size?: string;
  unfilledColor?: string;
  className?: string;
};

export const StarRating = ({
  filled,
  total = 5,
  className = '',
  filledColor = 'text-third fill-third',
  unfilledColor = 'text-muted fill-none',
  size = 'w-2 h-2',
}: StarRatingProps) => {
  return (
    <div className={`stars ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <Star
          key={index}
          className={`${size} inline ${
            index < filled ? filledColor : unfilledColor
          }`}
        />
      ))}
    </div>
  );
};
