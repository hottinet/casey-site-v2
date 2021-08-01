import styled from '@emotion/styled';

import FlexBox from './box/FlexBox';
import Body from './typography/Body';

type DividerProps = {
  label?: string;
  className?: string;
};

const Segment = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.border.borderWidth[3]};
  background-color: ${({ theme }) => theme.colors.text};
`;

const Label = styled(Body)`
  padding: 0 ${({ theme }) => theme.spacing[16]};
`;

const Divider: React.FC<DividerProps> = ({ label, className }) => (
  <FlexBox center className={className} mb={80} mt={48}>
    {label && (
      <>
        <Segment />
        <Label bold mb={0}>
          {label}
        </Label>
      </>
    )}
    <Segment />
  </FlexBox>
);

export default Divider;
