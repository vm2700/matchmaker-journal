
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Heart, Calendar, User } from 'lucide-react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  post, 
  className,
  featured = false
}) => {
  return (
    <article 
      className={cn(
        "group bg-white rounded-xl shadow-sm overflow-hidden card-hover",
        featured ? "md:col-span-2" : "",
        className
      )}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative overflow-hidden aspect-video md:aspect-[5/3]">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-love-600">
            {post.category}
          </div>
        </div>
      </Link>
      
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center">
            <User className="w-3 h-3 mr-1" />
            <span>{post.author}</span>
          </div>
          <div>{post.readTime}</div>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-love-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-love-600 font-medium hover:text-love-700 transition-colors"
        >
          Read more
          <Heart className="w-4 h-4 ml-1 transition-transform group-hover:scale-110" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
