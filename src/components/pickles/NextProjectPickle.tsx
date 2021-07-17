import styled from '@emotion/styled';

import { Color } from '~/typings/theme';

import Link from '../Link';
import Heading from '../typography/Heading';
import Pickle from './Pickle';

type NextProjectPickleProps = {
  nextProjectPath: string;
  color?: Color;
  className?: string;
};

const PickleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing[64]};
`;

const LinkPickle = styled(Pickle)`
  width: 50%;
  height: 9.25rem;
`;

const NextProjectPickle: React.FC<NextProjectPickleProps> = ({
  nextProjectPath,
  color = 'blue',
  className,
}) => (
  <LinkPickle className={className} color={color} origin="right">
    <PickleLink href={nextProjectPath} internal noHover>
      <Heading bold mb={0}>
        Next Project
      </Heading>
    </PickleLink>
  </LinkPickle>
);

export default NextProjectPickle;
