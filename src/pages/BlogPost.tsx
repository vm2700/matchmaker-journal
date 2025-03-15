
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import type { BlogPost } from '@/components/BlogCard';
import SubscribeForm from '@/components/SubscribeForm';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

// Mock data - this would come from your API or data source
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
  // ... additional posts can be added as needed
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find(p => p.slug === slug) || allPosts[0]; // Default to first post if not found
  
  // Mock related posts - in a real app, you'd use an algorithm to find related content
  const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 2);
  
  return (
    <PageTransition>
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container">
          <Link to="/blog" className="inline-flex items-center text-love-600 font-medium mb-6 hover:text-love-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-3 rounded-full inline-flex items-center text-sm font-medium text-love-600 mb-4">
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div>{post.readTime}</div>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-10 aspect-video">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Finding a truly compatible partner is about much more than just shared hobbies or physical attraction. While those elements matter, deep compatibility comes from alignment in values, communication styles, and life visions.
              </p>
              
              <p>
                In this article, we explore the seven most reliable indicators that you've found someone who is genuinely compatible with you for the long term. These signs go beyond the initial excitement of a new relationship and point to the kind of connection that can weather life's inevitable challenges.
              </p>
              
              <h2>1. Your Core Values Align</h2>
              
              <p>
                When your fundamental values align with your partner's, you're building on solid ground. This doesn't mean you need to agree on everything, but shared perspectives on what matters most in life—family, honesty, ambition, lifestyle choices—create a foundation for mutual understanding and respect.
              </p>
              
              <p>
                Research consistently shows that couples with aligned values report higher relationship satisfaction and longevity. When major decisions arise, these couples can navigate them with a shared framework that reduces conflict and increases cohesion.
              </p>
              
              <h2>2. You Communicate Effectively, Even During Disagreements</h2>
              
              <p>
                Every couple disagrees, but compatible partners can communicate through conflict productively. You listen to understand rather than to respond, express needs clearly without blame, and work toward resolution rather than "winning" the argument.
              </p>
              
              <p>
                This doesn't happen magically—it requires effort from both partners. But if you find that even in disagreement, you both maintain respect and seek to understand each other's perspective, that's a powerful sign of compatibility.
              </p>
              
              <h2>3. You Feel Comfortable Being Your Authentic Self</h2>
              
              <p>
                With a truly compatible partner, you don't need to censor yourself or present a polished version of who you are. You can share your quirks, insecurities, and dreams without fear of judgment.
              </p>
              
              <p>
                This mutual authenticity creates a relationship where both partners feel seen, accepted, and cherished for who they truly are—not for who they pretend to be.
              </p>
              
              <h2>4. You Share a Similar Vision for the Future</h2>
              
              <p>
                Compatible partners don't need identical dreams, but their visions for the future should be complementary and mutually supportive. Whether it's about career ambitions, family planning, lifestyle preferences, or retirement goals, alignment in these areas prevents fundamental conflicts down the road.
              </p>
              
              <p>
                Having regular, open conversations about future plans helps ensure you're growing in the same direction, even as individual goals evolve over time.
              </p>
              
              <h2>5. You Respect Each Other's Independence</h2>
              
              <p>
                Paradoxically, the strongest relationships aren't those where partners are inseparable, but where they maintain healthy independence while choosing to share their lives. Compatible partners support each other's individual growth, interests, and friendships outside the relationship.
              </p>
              
              <p>
                This balance between togetherness and autonomy creates space for both partners to flourish as individuals while growing together as a couple.
              </p>
              
              <h2>6. You Navigate Stress and Challenges as a Team</h2>
              
              <p>
                Life inevitably brings challenges—financial pressures, health concerns, career setbacks, or family issues. Compatible partners face these challenges as a unified team rather than as adversaries.
              </p>
              
              <p>
                Pay attention to how you handle stress together. Do you turn toward each other for support, or do difficulties drive you apart? A compatible partnership becomes stronger through challenges rather than fractured by them.
              </p>
              
              <h2>7. There's a Balance of Give and Take</h2>
              
              <p>
                In compatible relationships, both partners contribute and receive in relatively equal measure over time. This doesn't mean keeping score, but rather that both people consistently show up with generosity, consideration, and a willingness to meet the other's needs.
              </p>
              
              <p>
                This reciprocity creates a relationship where both partners feel valued and neither feels consistently depleted or taken for granted.
              </p>
              
              <h2>Conclusion</h2>
              
              <p>
                True compatibility isn't about finding a perfect person with no flaws, but about finding someone whose strengths, challenges, values, and vision complement your own in ways that bring out the best in both of you.
              </p>
              
              <p>
                If you recognize these seven signs in your relationship, you've likely found someone with whom you can build a fulfilling, lasting partnership. And if some elements are missing, identifying them gives you the opportunity to address them directly and determine whether they can be developed over time.
              </p>
              
              <p>
                Remember that compatibility isn't static—it requires ongoing communication, mutual growth, and intentional nurturing. But when you build on this foundation of deep compatibility, you create the conditions for love to flourish for years to come.
              </p>
            </div>
            
            <div className="flex justify-between items-center border-t border-b py-6 my-10">
              <div>
                <span className="block text-sm text-gray-500 mb-1">Written by</span>
                <span className="font-medium">{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-1">Share:</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <SubscribeForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default BlogPost;
