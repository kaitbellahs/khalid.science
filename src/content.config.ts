import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    lang: z.enum(['pt', 'en']).default('pt'),
    doi: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['seed', 'growing', 'evergreen']),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    tags: z.array(z.string()),
    links: z.array(z.string()).optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string().optional(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().optional(),
    type: z.enum(['article', 'review', 'preprint', 'thesis']),
    abstract: z.string().optional(),
  }),
});

export const collections = { blog, notes, publications };
