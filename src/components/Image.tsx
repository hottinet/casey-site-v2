import styled from '@emotion/styled';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  fitParent?: boolean;
};

const StyledImage = styled.img<Pick<ImageProps, 'fitParent'>>`
  width: ${({ fitParent }) => fitParent && '100%'};
`;

const Image: React.FC<ImageProps> = ({ src, alt, fitParent, className }) => (
  <StyledImage
    alt={alt}
    className={className}
    fitParent={fitParent}
    loading="lazy"
    src={src}
  />
);

export default Image;
