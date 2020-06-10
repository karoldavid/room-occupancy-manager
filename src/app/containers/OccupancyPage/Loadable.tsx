import { lazyLoad } from 'utils/loadable';

export const OccupancyPage = lazyLoad(
  () => import('./index'),
  module => module.OccupancyPage,
);
