export interface ScholarlyArticleLD {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  authorName?: string;
  doi?: string;
  image?: string;
}

export interface PersonLD {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  sameAs?: string[];
}

export function generateScholarlyArticleLD(data: ScholarlyArticleLD): string {
  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: data.title,
    description: data.description,
    datePublished: data.datePublished,
    url: data.url,
    author: {
      '@type': 'Person',
      name: data.authorName || 'Khalid Ait Bellahs',
      url: 'https://khalid.science/about',
    },
    publisher: {
      '@type': 'Person',
      name: 'Khalid Ait Bellahs',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };

  if (data.dateModified) ld.dateModified = data.dateModified;
  if (data.doi) ld.identifier = { '@type': 'PropertyValue', propertyID: 'doi', value: data.doi };
  if (data.image) ld.image = data.image;

  return JSON.stringify(ld);
}

export function generatePersonLD(data: PersonLD): string {
  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    url: data.url,
  };

  if (data.image) ld.image = data.image;
  if (data.jobTitle) ld.jobTitle = data.jobTitle;
  if (data.sameAs) ld.sameAs = data.sameAs;

  return JSON.stringify(ld);
}

export function generateWebSiteLD(name: string, url: string): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    author: {
      '@type': 'Person',
      name: 'Khalid Ait Bellahs',
    },
  });
}
