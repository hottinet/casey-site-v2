type VideoProps = {
  controls?: boolean;
  sources: {
    src: string;
    type?: 'video/mp4' | 'video/webm' | 'video/ogg';
  }[];
  autoPlay?: boolean;
  muted?: boolean;
  className?: string;
};

const Video: React.FC<VideoProps> = ({
  controls = false,
  sources,
  autoPlay = true,
  muted,
  className,
}) => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <video
    autoPlay={autoPlay}
    className={className}
    controls={controls}
    muted={muted}
  >
    {sources.map(({ src, type = 'video/mp4' }) => (
      <source key={src} src={src} type={type} />
    ))}
    Your browser does not support the video tag.
  </video>
);

export default Video;
