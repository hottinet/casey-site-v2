type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img alt={alt} className={className} src={src} />
);

export default Image;
