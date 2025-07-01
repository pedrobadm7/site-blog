import Image, { ImageProps } from 'next/image'

import { cn } from '@/lib/utils'

type Avatarsize = 'xs' | 'sm'

type AvatarImageProps = Omit<ImageProps, 'width' | 'height'> & {
  size?: Avatarsize
}

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
}

export const AvatarImage = ({ src, alt, size = 'sm', ...rest }: AvatarImageProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-[1px] border-blue-200',
        avatarSize[size],
      )}
    >
      <Image {...rest} src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}
