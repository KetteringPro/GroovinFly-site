import { notFound } from 'next/navigation';
import FirstFestivalOver40 from './posts/first-festival-over-40';
import SalemHalloween from './posts/salem-halloween';
import ChristmasNYC from './posts/christmas-nyc';

const blogPosts: Record<string, React.ComponentType> = {
  'first-festival-over-40': FirstFestivalOver40,
  'salem-halloween': SalemHalloween,
  'christmas-nyc': ChristmasNYC,
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const PostComponent = blogPosts[params.slug];
  
  if (!PostComponent) {
    notFound();
  }
  
  return <PostComponent />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}