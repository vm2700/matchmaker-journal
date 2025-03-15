
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscribeForm from '@/components/SubscribeForm';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, User, Clock, ArrowLeft, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BlogPost } from '@/components/BlogCard';

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
];

// Related posts function
const getRelatedPosts = (currentSlug: string, category: string) => {
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, 2);
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <PageTransition>
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </PageTransition>
    );
  }
  
  const relatedPosts = getRelatedPosts(post.slug, post.category);
  
  return (
    <PageTransition>
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-love-600 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <div className="animate-fade-up">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-love-100 text-love-600 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg animate-scale-in">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate-fade-in">
            <p>
              In today's fast-paced dating world, finding a truly compatible partner can feel like searching 
              for a needle in a haystack. Many of us focus on initial attraction or shared interests, but 
              deep compatibility—the kind that sustains relationships through life's challenges—often lies 
              beneath the surface.
            </p>
            
            <p>
              At HeartMatch, our matchmaking approach centers on identifying these deeper compatibility factors. 
              Through years of experience connecting successful couples, we've identified seven critical signs 
              that indicate you've found someone with genuine relationship potential.
            </p>
            
            <h2>1. Values Alignment</h2>
            <p>
              When core values align, daily decisions and long-term goals naturally flow in harmony. Values 
              represent what you fundamentally believe is important in life—whether it's family, career achievement, 
              adventure, community service, or spiritual growth.
            </p>
            <p>
              Compatible partners don't need identical values, but there should be significant overlap in what 
              you both consider most important. When values clash fundamentally, seemingly small decisions can 
              become constant sources of conflict.
            </p>
            
            <h2>2. Communication Rhythms Match</h2>
            <p>
              Every person has a unique communication style and rhythm. Some process thoughts externally, 
              talking through every detail of their day. Others are more reserved, needing time to reflect 
              before sharing.
            </p>
            <p>
              Deep compatibility appears when you and your partner naturally understand and respect each 
              other's communication needs. You feel heard and understood, even during disagreements, and 
              conversations flow with a natural give-and-take.
            </p>
            
            <h2>3. Complementary Conflict Styles</h2>
            <p>
              Conflict is inevitable in any relationship. What matters is how you navigate it together. 
              Compatible partners have conflict styles that work together rather than against each other.
            </p>
            <p>
              Pay attention to how you both respond when tensions rise. Do you balance each other? 
              Perhaps one partner cools down quickly while the other needs time to process. The key is 
              that your approaches complement rather than exacerbate each other.
            </p>
            
            <h2>4. Mutual Respect During Disagreements</h2>
            <p>
              Even in heated moments, deeply compatible partners maintain an underlying respect for each other. 
              Disagreements focus on issues rather than attacking character, and both partners avoid contempt or 
              dismissiveness.
            </p>
            <p>
              This respect manifests as active listening, willingness to consider the other's perspective, 
              and remembering you're on the same team even when you disagree.
            </p>
            
            <h2>5. Aligned Life Visions</h2>
            <p>
              Where do you see yourself in five years? Ten years? Compatible partners have visions of the 
              future that naturally complement each other. This includes practical matters like where to live, 
              whether to have children, financial goals, and how you want to spend your time.
            </p>
            <p>
              You don't need identical dreams, but your visions should be able to intertwine without 
              either partner feeling they're sacrificing core needs.
            </p>
            
            <h2>6. Energy Balance</h2>
            <p>
              Each relationship has its own unique energy exchange. Compatible partners naturally energize 
              rather than drain each other. After spending time together, you feel replenished rather than depleted.
            </p>
            <p>
              This doesn't mean constant excitement—quiet comfort is equally valuable. What matters is that the 
              relationship's natural rhythm feels sustaining rather than taxing.
            </p>
            
            <h2>7. Growth Compatibility</h2>
            <p>
              The most successful long-term relationships involve partners who help each other grow. 
              Compatible partners challenge each other in healthy ways and celebrate each other's development.
            </p>
            <p>
              Look for someone who supports your evolution, encourages your pursuits, and is willing to 
              grow alongside you. This shared journey of development creates a dynamic, evolving partnership.
            </p>
            
            <h2>Conclusion</h2>
            <p>
              Finding deep compatibility isn't about locating a perfect match with no differences. Rather, 
              it's about connecting with someone whose natural way of being in the world complements yours.
            </p>
            <p>
              At HeartMatch, we carefully consider these compatibility factors when connecting potential partners. 
              Our experience shows that relationships built on these foundations have the greatest potential for 
              long-term happiness and fulfillment.
            </p>
            <p>
              Remember that compatibility reveals itself over time. Be patient, stay observant, and trust your 
              intuition as you explore connection with potential partners.
            </p>
          </div>
          
          {/* Share Section */}
          <div className="border-t border-b py-6 my-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-medium">Share this article:</p>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row gap-6 mb-16">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center sm:text-left">{post.author}</h3>
              <p className="text-gray-600 mb-3">
                Emma is a certified relationship coach with over 10 years of experience in professional matchmaking. 
                She specializes in helping individuals identify relationship patterns and find compatible partners.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a href="#" className="text-gray-600 hover:text-love-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-love-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-10 text-center">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
                <Link to={`/blog/${relatedPost.slug}`} className="block">
                  <div className="aspect-video">
                    <img 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <div className="text-xs text-love-600 font-medium mb-2">{relatedPost.category}</div>
                  <Link to={`/blog/${relatedPost.slug}`} className="block">
                    <h3 className="font-semibold mb-2 line-clamp-2 hover:text-love-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <time dateTime={relatedPost.date}>{relatedPost.date}</time>
                    </div>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-center">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-love-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Have Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Our relationship experts are here to help with your personal situation.
                </p>
                <Button asChild className="rounded-full bg-love-600 hover:bg-love-700">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the latest relationship advice, matchmaking tips, and exclusive content delivered to your inbox.
            </p>
          </div>
          
          <SubscribeForm className="max-w-xl mx-auto" />
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default BlogPostPage;
