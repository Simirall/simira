// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_404_getConfig } from './pages/404';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_Qr_getConfig } from './pages/qr';
// prettier-ignore
import type { getConfig as File_Root_getConfig } from './pages/_root';

// prettier-ignore
type Page =
| ({ path: '/404' } & GetConfigResponse<typeof File_404_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/qr' } & GetConfigResponse<typeof File_Qr_getConfig>)
| ({ path: '/_root' } & GetConfigResponse<typeof File_Root_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
