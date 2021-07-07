import styled from '@emotion/styled';

interface Props {
  className?: string;
  viewBox?: string;
  title: string;
  titleId: string;
  children: React.ReactNode;
}

const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;

const Icon: React.FC<Props> = ({
  viewBox = '0 0 24 24',
  title,
  titleId,
  className,
  children,
}) => (
  <Svg
    aria-labelledby={titleId}
    className={className}
    role="img"
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id={titleId}>{title}</title>
    {children}
  </Svg>
);

export default Icon;
