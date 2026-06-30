import type { Content, Lang, ResolvedProject } from './types';
import { projectsMeta } from './projects-meta';
import { en } from './en';
import { et } from './et';
import { pl } from './pl';
import { ru } from './ru';

// What components consume: identical to Content, but portfolio projects are
// merged with their language-independent metadata.
export type ResolvedContent = Omit<Content, 'portfolio'> & {
  portfolio: Omit<Content['portfolio'], 'projects'> & { projects: ResolvedProject[] };
};

const resolve = (c: Content): ResolvedContent => ({
  ...c,
  portfolio: {
    ...c.portfolio,
    projects: c.portfolio.projects.map((copy) => {
      const meta = projectsMeta.find((m) => m.id === copy.id);
      if (!meta) throw new Error(`No project meta for id "${copy.id}"`);
      return { ...meta, category: copy.category, tag: copy.tag, description: copy.description };
    }),
  },
});

export const content: Record<Lang, ResolvedContent> = {
  en: resolve(en),
  et: resolve(et),
  pl: resolve(pl),
  ru: resolve(ru),
};

export { en, et, pl, ru };
