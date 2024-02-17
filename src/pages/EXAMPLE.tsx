import { FlexBox } from '~/components/box/FlexBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
import { HOME_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

function EXAMPLE_PAGE_CHANGE_ME() {
  const belowSm = useBreakpointsLessThan('sm');
  return (
    <Layout nextPageHref={HOME_ROUTE}>
      <FlexBox flexDirection="column" gap={80}>
        {/**
         *
         *  ContentContainer is for bounded countent
         *
         */}
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <Text
            as="h1"
            lineHeight={1.2}
            variant={belowSm ? 'headline4' : 'headline3'}
          >
            Building an app-first wedding budget tool for Zola
          </Text>
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/881214462"
            title="video of budget tool features"
          />
          <Text as="p" variant="bodySmall">
            Note: This video has been updated to reflect new Zola branding as
            well as a few new features added after this case study was created.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            Competitive Research
          </Text>
          <Text as="p" variant="bodySmall">
            I looked at a handful of budgeting tools, both wedding related and
            not. Most wedding specific tools did not break down to a payment
            level or include the ability to set reminders. Many of them also
            started with lots of pre-populated items that could be overwhelming
            to the couple.
          </Text>
        </ContentContainer>

        {/**
         *
         * Anything outside of a content container will go full width
         *
         */}
        <Image alt="Competitors" src="/ZolaBudget/zola-budget-competitor.png" />
      </FlexBox>
    </Layout>
  );
}

export default EXAMPLE_PAGE_CHANGE_ME;
