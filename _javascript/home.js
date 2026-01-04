import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime, imgLazy } from './modules/plugins';
import { initRecentPagination } from './modules/home-pagination';

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
imgLazy();
initRecentPagination();
