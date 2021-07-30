import styled from '@emotion/styled';

import { HOME_ROUTE } from '~/constants/routing';
import { Color } from '~/typings/theme';

import Arrow from '../icons/Arrow';
import Link from '../Link';
import Heading from '../typography/Heading';
import Pickle from './Pickle';

type NextProjectPickleProps = {
  nextProjectPath: string;
  color?: Color;
  className?: string;
};

const LinkPickle = styled(Pickle)`
  width: 75%;
  height: 9.25rem;
  transition: transform 0.5s;
  transform: translateX(5%);
  border-radius: 1000px 0 0 1000px;
  :hover {
    transform: translateX(0);
  }
  ${({ theme }) => theme.breakpoints.sm} {
    width: 50%;
  }
`;

const ArrowIcon = styled(Arrow)`
  height: ${({ theme }) => theme.spacing[24]};
  width: ${({ theme }) => theme.spacing[24]};
  margin-left: ${({ theme }) => theme.spacing[16]};
`;

const PickleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing[64]};
`;

const NextProjectPickle: React.FC<NextProjectPickleProps> = ({
  nextProjectPath,
  color = 'blue',
  className,
}) => {
  const isBackToHome = nextProjectPath === HOME_ROUTE;
  return (
    <LinkPickle
      className={className}
      color={isBackToHome ? 'red' : color}
      origin="right"
    >
      <PickleLink href={nextProjectPath} internal noHoverStyles>
        <Heading bold mb={0}>
          {isBackToHome ? 'Back to Home' : 'Next Project'}
        </Heading>
        <ArrowIcon title="Next project arrow" titleId="next-project-arrow" />
      </PickleLink>
    </LinkPickle>
  );
};

export default NextProjectPickle;
