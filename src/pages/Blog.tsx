
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import SubscribeForm from '@/components/SubscribeForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

// Mock data for blog posts
const allPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'finding-your-perfect-match',
    title: 'Finding Your Perfect Match: 7 Signs of Deep Compatibility',
    excerpt: 'Discover the key indicators that you've found someone truly compatible for a long-term relationship.',
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
    excerpt: 'Learn how to develop deeper emotional intimacy and why it's crucial for relationship longevity.',
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
    excerpt: 'We address misconceptions about professional matchmaking and how it actually works in today's dating landscape.',
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
    slug: 'dating-after-divorce',
    title: 'Dating After Divorce: Finding New Love With Clarity',
    excerpt: 'How to approach dating with a fresh perspective and openness after the end of a marriage.',
    coverImage: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80',
    category: 'Dating Tips',
    date: 'March 18, 2023',
    author: 'Sophia Chen',
    readTime: '6 min read',
  },
  {
    id: '8',
    slug: 'authentic-dating-profile',
    title: 'Creating an Authentic Dating Profile That Attracts the Right Match',
    excerpt: 'How to present yourself genuinely while highlighting your best qualities to attract compatible partners.',
    coverImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Matchmaking',
    date: 'February 22, 2023',
    author: 'Michael Torres',
    readTime: '4 min read',
  },
  {
    id: '9',
    slug: 'vulnerability-dating',
    title: 'The Power of Vulnerability in Building Meaningful Relationships',
    excerpt: 'Why opening up emotionally is essential for creating deep and lasting romantic connections.',
    coverImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    category: 'Love',
    date: 'January 15, 2023',
    author: 'Emma Roberts',
    readTime: '5 min read',
  },
];

// Categories
const categories = [
  'All',
  'Relationships',
  'Dating Tips',
  'Matchmaking',
  'Love',
  'Communication',
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter posts based on search query and category
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled via the state
  };
  
  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Matchmaking & Relationship Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-up delay-100">
              Expert advice on finding love, building meaningful connections, and navigating modern relationships.
            </p>
            
            <form onSubmit={handleSearch} className="max-w-md mx-auto animate-fade-up delay-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-full rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-6 bg-white border-y">
        <div className="container">
          <div className="flex items-center justify-start overflow-x-auto pb-2 md:pb-0 md:justify-center space-x-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-love-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    No articles match your current search criteria. Try adjusting your search or browse all categories.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
            
            <div>
              <SubscribeForm />
              
              <div className="mt-10 bg-gray-50 rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.filter(c => c !== 'All').map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-love-300 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Featured Article</h3>
                <div className="bg-white rounded-xl overflow-hidden border shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                    alt="Featured post" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-xs font-medium text-love-600 mb-2">Editor's Pick</div>
                    <h4 className="font-medium mb-2">First Date Conversations That Create Genuine Connection</h4>
                    <Link to="/blog/first-date-conversations" className="text-sm text-love-600 hover:text-love-700 transition-colors">
                      Read article →
                    </Link>
                  </div>
                </div>
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
