
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import SubscribeForm from '@/components/SubscribeForm';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Clock, 
  Users, 
  MessageCircle, 
  ArrowRight,
  Search
} from 'lucide-react';

// Mock data for blog posts
const featuredPosts: BlogPost[] = [
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
];

const recentPosts: BlogPost[] = [
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
];

const Index: React.FC = () => {
  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-love-600 bg-love-100 rounded-full animate-fade-in">
              <Heart className="w-4 h-4 mr-1" />
              <span>Professional Matchmaking & Relationship Advice</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-balance">
              Finding Love Through <span className="text-love-600">Expert Matchmaking</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up delay-100 text-balance">
              We connect compatible individuals through personalized matchmaking and provide 
              relationship insights through our blog. Your journey to meaningful connection 
              starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
              <Button asChild size="lg" className="rounded-full bg-love-600 hover:bg-love-700">
                <Link to="/contact">
                  Start Matchmaking
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/blog">
                  Read Our Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Matchmaking Approach</h2>
            <p className="text-gray-600">
              We blend time-tested matchmaking principles with modern relationship science
              to help you find meaningful connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-love-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-love-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Matching</h3>
              <p className="text-gray-600">
                We take time to understand your values, preferences, and relationship goals to 
                find compatible matches.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-love-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-7 h-7 text-love-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Guided Process</h3>
              <p className="text-gray-600">
                Our experts provide support throughout your matchmaking journey with feedback and 
                relationship coaching.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-love-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-love-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Network</h3>
              <p className="text-gray-600">
                Connect with a carefully vetted community of individuals who are serious about 
                finding lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
              <p className="text-gray-600 max-w-2xl">
                Insights, advice, and stories about modern relationships and finding lasting love.
              </p>
            </div>
            <Link to="/blog" className="inline-flex items-center text-love-600 font-medium mt-4 md:mt-0 hover:text-love-700 transition-colors">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Hear from couples who found lasting love through our matchmaking services.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto border">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                  alt="Sarah & Michael"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="italic text-gray-600 mb-4">
                  "After several disappointing dating experiences, I was skeptical about matchmaking. 
                  But HeartMatch truly understood what I was looking for in a partner. They introduced 
                  me to Michael, and we connected instantly over our shared values and interests. 
                  We've been married for two years now and couldn't be happier!"
                </blockquote>
                
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900">Sarah & Michael Thompson</h4>
                  <p className="text-sm text-gray-500">Matched in June 2020 • Married in September 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Posts & Subscribe Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/blog" className="inline-flex items-center">
                    View all articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div>
              <SubscribeForm />
              
              <div className="mt-10 bg-white rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4">Ready to Find Love?</h3>
                <p className="text-gray-600 mb-6">
                  Our matchmaking experts are ready to help you find a meaningful connection.
                </p>
                <Button asChild className="w-full bg-love-600 hover:bg-love-700">
                  <Link to="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 flex flex-col gap-4">
                <Link to="/blog" className="bg-white p-4 rounded-xl border transition-colors hover:border-love-200 flex items-center">
                  <Search className="w-5 h-5 text-love-600 mr-3" />
                  <span className="font-medium">Search Articles</span>
                </Link>
                <Link to="/contact" className="bg-white p-4 rounded-xl border transition-colors hover:border-love-200 flex items-center">
                  <MessageCircle className="w-5 h-5 text-love-600 mr-3" />
                  <span className="font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Index;
