import styled from '@emotion/styled';
import { ComponentPropsWithoutRef } from 'react';

import { AllowedCommonCssProps } from '~/constants/css';
import { Spacing } from '~/typings/theme';
import { filterCssProps } from '~/utils/css';

import { FlexBox } from '../box/FlexBox';

interface IconButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'color'>,
    AllowedCommonCssProps {
  iconSize?: Spacing;
}

const Button = styled('button')(({ theme, ...rest }) => ({
  backgroundColor: 'transparent',
  minHeight: theme.spacing['48'],
  minWidth: theme.spacing['48'],
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...filterCssProps(rest, theme),
}));

export function IconButton({
  iconSize = 24,
  children,
  ...buttonProps
}: IconButtonProps) {
  return (
    <Button {...buttonProps}>
      <FlexBox
        alignItems="center"
        height={iconSize}
        justifyContent="center"
        width={iconSize}
      >
        {children}
      </FlexBox>
    </Button>
  );
}
