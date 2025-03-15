
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import SubscribeForm from '@/components/SubscribeForm';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, Search, Filter } from 'lucide-react';

// Using the same mock data structure from Index.tsx
const allPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'finding-your-perfect-match',
    title: 'Finding Your Perfect Match: 7 Signs of Deep Compatibility',
    excerpt: "Discover the key indicators that you've found someone truly compatible for a long-term relationship.",
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Relationships',
    date: 'June 12, 2023',
    author: 'Emma Roberts',
    readTime: '5 min read',
  },
  {
    id: '2',
    slug: 'first-date-conversations',
    title: 'First Date Conversations That Create Genuine Connection',
    excerpt: 'Move beyond small talk with these conversation starters that build authentic connection from the very first meeting.',
    coverImage: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    category: 'Dating Tips',
    date: 'May 28, 2023',
    author: 'James Mitchell',
    readTime: '4 min read',
  },
  {
    id: '3',
    slug: 'emotional-intimacy',
    title: 'Building Emotional Intimacy: The Foundation of Lasting Love',
    excerpt: "Learn how to develop deeper emotional intimacy and why it's crucial for relationship longevity.",
    coverImage: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Love',
    date: 'April 15, 2023',
    author: 'Sophia Chen',
    readTime: '6 min read',
  },
  {
    id: '4',
    slug: 'matchmaking-myths',
    title: 'Debunking 5 Common Matchmaking Myths',
    excerpt: "We address misconceptions about professional matchmaking and how it actually works in today's dating landscape.",
    coverImage: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Matchmaking',
    date: 'July 3, 2023',
    author: 'Michael Torres',
    readTime: '4 min read',
  },
  {
    id: '5',
    slug: 'long-distance-relationships',
    title: 'Making Long-Distance Relationships Work: A Complete Guide',
    excerpt: 'Practical advice for maintaining connection and nurturing love when miles separate you.',
    coverImage: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    category: 'Relationships',
    date: 'June 27, 2023',
    author: 'Emma Roberts',
    readTime: '7 min read',
  },
  {
    id: '6',
    slug: 'red-flags-dating',
    title: 'Red Flags vs. Quirks: What to Ignore and What to Address',
    excerpt: 'How to distinguish between harmless quirks and genuine warning signs when getting to know someone new.',
    coverImage: 'https://images.unsplash.com/photo-1596543395966-c695e9c530ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Dating Tips',
    date: 'June 15, 2023',
    author: 'James Mitchell',
    readTime: '5 min read',
  },
  {
    id: '7',
    slug: 'dating-apps-vs-matchmaking',
    title: 'Dating Apps vs. Professional Matchmaking: Which Is Right for You?',
    excerpt: "A comparison of online dating and traditional matchmaking to help you decide which approach aligns with your relationship goals.",
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Dating Tips',
    date: 'June 8, 2023',
    author: 'Michael Torres',
    readTime: '6 min read',
  },
  {
    id: '8',
    slug: 'self-confidence-dating',
    title: 'Building Self-Confidence for Dating Success',
    excerpt: 'Practical steps to develop the confidence needed to navigate the dating world authentically and successfully.',
    coverImage: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    category: 'Personal Growth',
    date: 'May 15, 2023',
    author: 'Emma Roberts',
    readTime: '5 min read',
  },
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  
  const categories = React.useMemo(() => {
    const uniqueCategories = new Set(allPosts.map(post => post.category));
    return Array.from(uniqueCategories);
  }, []);
  
  const filteredPosts = React.useMemo(() => {
    if (!activeCategory) return allPosts;
    return allPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-love-600 bg-love-100 rounded-full">
              <Heart className="w-4 h-4 mr-1" />
              <span>Relationship Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Matchmaking Blog
            </h1>
            
            <p className="text-lg text-gray-600">
              Expert advice, success stories, and insights to help you find meaningful connection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-3/4">
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Button 
                  variant={!activeCategory ? "default" : "outline"}
                  onClick={() => setActiveCategory(null)}
                  className="rounded-full"
                >
                  All Topics
                </Button>
                
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-xl border mb-6">
                  <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Search by keyword..."
                      className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-love-200"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border mb-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeCategory === category 
                            ? "bg-love-600 text-white" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Blog;
