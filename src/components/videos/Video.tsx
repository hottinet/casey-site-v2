import styled from '@emotion/styled';

type VideoProps = {
  controls?: boolean;
  sources: {
    src: string;
    type?: 'video/mp4' | 'video/webm' | 'video/ogg';
  }[];
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
};

const FitVideo = styled.video`
  max-height: 100%;
  max-width: 100%;
`;

const Video: React.FC<VideoProps> = ({
  controls = false,
  sources,
  autoPlay = true,
  muted = true,
  loop = true,
  className,
}) => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <FitVideo
    autoPlay={autoPlay}
    className={className}
    controls={controls}
    loop={loop}
    muted={muted}
    playsInline
  >
    {sources.map(({ src, type = 'video/mp4' }) => (
      <source key={src} src={src} type={type} />
    ))}
    Your browser does not support the video tag.
  </FitVideo>
);

export default Video;
