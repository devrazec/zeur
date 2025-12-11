export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000';

  const routes = ['', 'zeur'];

  return routes.map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
