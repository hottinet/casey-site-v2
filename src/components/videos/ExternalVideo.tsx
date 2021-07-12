import styled from '@emotion/styled';

type ExternalVideoProps = {
  src: string;
  title: string;
  aspectRatio?: '1:1' | '16:9' | '4:3';
  className?: string;
};

const VideoWrapper = styled.div<Pick<ExternalVideoProps, 'aspectRatio'>>`
  margin-top: ${({ theme }) => theme.spacing[16]};
  position: relative;
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => {
    let aspectString;

    switch (aspectRatio) {
      case '1:1':
        aspectString = '100%';
        break;
      case '4:3':
        aspectString = '75%';
        break;
      default:
        // 16:9
        aspectString = '56.25%';
    }
    return aspectString;
  }};
`;

const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ExternalVideo: React.FC<ExternalVideoProps> = ({
  src,
  title,
  aspectRatio = '16:9',
  className,
}) => (
  <VideoWrapper aspectRatio={aspectRatio} className={className}>
    <Frame
      allow="autoplay; fullscreen"
      allowFullScreen
      frameBorder="0"
      src={src}
      title={title}
    />
  </VideoWrapper>
);

export default ExternalVideo;
