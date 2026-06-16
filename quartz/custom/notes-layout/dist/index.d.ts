import { QuartzTransformerPlugin } from '@quartz-community/types';
export { _ as Backlinks, B as BacklinksOptions, a as MobileToc } from './index-DKihU_Sc.js';

interface TocTransformerOptions {
    maxDepth: 1 | 2 | 3 | 4 | 5 | 6;
    minEntries: number;
    showByDefault: boolean;
    collapseByDefault: boolean;
}
interface TocEntry {
    depth: number;
    text: string;
    slug: string;
}
declare const TocTransformer: QuartzTransformerPlugin<Partial<TocTransformerOptions>>;

export { type TocEntry, TocTransformer, type TocTransformerOptions };
