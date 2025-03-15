
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HeartMatch</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're dedicated to creating meaningful connections that lead to lasting relationships.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                HeartMatch was founded in 2015 with a simple mission: to help people find love that lasts. 
                Our founder, Elizabeth Chen, had worked as a relationship therapist for over a decade and 
                saw firsthand how many people struggled to find compatible partners despite their best efforts.
              </p>
              <p className="text-gray-600 mb-4">
                She believed that with the right approach—combining traditional matchmaking wisdom with 
                modern relationship science—more people could find fulfilling relationships. What started 
                as a small matchmaking service in San Francisco has grown into a nationwide network of 
                matchmakers and relationship experts.
              </p>
              <p className="text-gray-600">
                Today, HeartMatch has helped thousands of couples find meaningful connections, with over 
                800 marriages and countless long-term relationships to our credit.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="HeartMatch Team" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-love-50 border border-love-100 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Heart className="text-love-600 w-5 h-5" />
                  <p className="font-medium text-gray-900">800+ successful matches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              At HeartMatch, everything we do is guided by these core principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-love-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-love-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Connection</h3>
              <p className="text-gray-600">
                We believe in fostering genuine relationships based on compatibility, shared values, and mutual respect.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-love-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-love-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Approach</h3>
              <p className="text-gray-600">
                Each client receives individualized attention tailored to their unique relationship goals and preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-love-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-love-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our matchmaking process, client service, and relationship guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our experienced matchmakers and relationship experts are dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" 
                  alt="Elizabeth Chen" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Elizabeth Chen</h3>
              <p className="text-love-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former relationship therapist with 15+ years of experience helping couples build lasting connections.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="David Williams" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Williams</h3>
              <p className="text-love-600 mb-2">Lead Matchmaker</p>
              <p className="text-gray-600 text-sm">
                With over 500 successful matches to his name, David brings intuition and expertise to the matchmaking process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                  alt="Sophia Rodriguez" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sophia Rodriguez</h3>
              <p className="text-love-600 mb-2">Relationship Coach</p>
              <p className="text-gray-600 text-sm">
                Certified relationship coach who helps clients navigate the dating process and build communication skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-love-600 mb-2">800+</div>
              <p className="text-gray-600">Successful Marriages</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-love-600 mb-2">5,000+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-love-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-love-600 mb-2">92%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-love-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-love-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards a meaningful relationship today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-love-600 hover:bg-love-700">
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/blog">
                  Read Dating Tips
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
