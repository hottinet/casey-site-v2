import styled from '@emotion/styled';

import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

import FlexBox from './box/FlexBox';

type StackedTextProps = {
  topText: string;
  bottomText: string;
  title?: boolean;
  className?: string;
};

type TopTextProps = Pick<StackedTextProps, 'title'> & {
  children: string;
};

const TopText: React.FC<TopTextProps> = ({ title, children }) =>
  title ? <Title bold>{children}</Title> : <Heading bold>{children}</Heading>;

const StackedText: React.FC<StackedTextProps> = ({
  topText,
  bottomText,
  title,
  className,
}) => (
  <FlexBox className={className} column>
    <TopText title={title}>{topText}</TopText>
    <Body mb={0}>{bottomText}</Body>
  </FlexBox>
);

export default StackedText;
