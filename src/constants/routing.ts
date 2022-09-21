export const VIDEO_UPLOAD_ROUTE = '/video-uploads';
export const CUSTOMER_DISCOVERY_ROUTE = '/customer-discovery';
export const CORE_LIVE_CLASSES = '/core-live-classes';
export const CORE_PROGRAMS = '/core-programs';
export const CORE_SESSIONS = '/core-sessions';
export const IRTH_ROUTE = '/irth';
export const LADDERS_ROUTE = '/ladders';
export const LISTENJAY_ROUTE = '/listenjay';
export const HOME_ROUTE = '/';
export const ABOUT_ROUTE = '/about';
export const ZOLA_CUSTOM_WEBSITE_ROUTE = '/zola-custom-website';
export const ZOLA_FILTER_ROUTE = '/zola-filters';
export const ZOLA_BUDGET_ROUTE = '/zola-budget-tool';

export const RESTRICTED_ROUTES = [ZOLA_CUSTOM_WEBSITE_ROUTE, ZOLA_BUDGET_ROUTE];

export const NEXT_ROUTE_MAP: Record<string, string> = {
  [ZOLA_BUDGET_ROUTE]: ZOLA_CUSTOM_WEBSITE_ROUTE,
  [ZOLA_CUSTOM_WEBSITE_ROUTE]: CORE_PROGRAMS,
  [CORE_PROGRAMS]: CUSTOMER_DISCOVERY_ROUTE,
  [CUSTOMER_DISCOVERY_ROUTE]: CORE_LIVE_CLASSES,
  [CORE_LIVE_CLASSES]: CORE_SESSIONS,
  [CORE_SESSIONS]: IRTH_ROUTE,
  [IRTH_ROUTE]: LADDERS_ROUTE,
  [LADDERS_ROUTE]: LISTENJAY_ROUTE,
  [LISTENJAY_ROUTE]: HOME_ROUTE,
};
