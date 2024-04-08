import { useState } from 'react';

import { FlexBox } from '../box/FlexBox';
import Image from '../Image';
import { Link } from '../Link';
import { ShowoffContent, ShowoffContentProps } from './ShowoffContent';

interface ShowoffSecondaryProps extends Omit<ShowoffContentProps, 'mini'> {
  imageSrc: string;
  altText: string;
}

export function ShowoffSecondary({
  imageSrc,
  altText,
  linkHref,
  title,
  ...showoffProps
}: ShowoffSecondaryProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={linkHref}
      internal
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FlexBox flexDirection="column" gap={32}>
        <Image alt={altText} src={imageSrc} />
        <ShowoffContent
          mini
          {...showoffProps}
          linkHref=""
          title={title}
          underline={isHovered}
        />
      </FlexBox>
    </Link>
  );
}
