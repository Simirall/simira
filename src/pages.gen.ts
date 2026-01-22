// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_404_getConfig } from './pages/404';
// prettier-ignore
import type { getConfig as File_AboutIndex_getConfig } from './pages/about/index';
// prettier-ignore
import type { getConfig as File_DevIndex_getConfig } from './pages/dev/index';
// prettier-ignore
import type { getConfig as File_IllustIndex_getConfig } from './pages/illust/index';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_LinksIndex_getConfig } from './pages/links/index';
// prettier-ignore
import type { getConfig as File_QrIndex_getConfig } from './pages/qr/index';
// prettier-ignore
import type { getConfig as File_Root_getConfig } from './pages/_root';

// prettier-ignore
type Page =
| ({ path: '/404' } & GetConfigResponse<typeof File_404_getConfig>)
| ({ path: '/about' } & GetConfigResponse<typeof File_AboutIndex_getConfig>)
| ({ path: '/dev' } & GetConfigResponse<typeof File_DevIndex_getConfig>)
| ({ path: '/illust' } & GetConfigResponse<typeof File_IllustIndex_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/links' } & GetConfigResponse<typeof File_LinksIndex_getConfig>)
| ({ path: '/qr' } & GetConfigResponse<typeof File_QrIndex_getConfig>)
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
