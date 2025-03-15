
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface SubscribeFormProps {
  className?: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = new FormData(form).get('email') as string;
    
    // This would connect to your email service
    console.log('Subscribed email:', email);
    toast({
      title: "Subscription successful!",
      description: "You'll receive our latest matchmaking insights and relationship advice.",
      duration: 3000,
    });
    
    form.reset();
  };

  return (
    <div className={className}>
      <div className="bg-gray-50 rounded-xl p-6 md:p-8 border">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Get Matchmaking Insights
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for exclusive relationship advice and updates.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="w-full"
          />
          <Button 
            type="submit" 
            className="w-full bg-love-600 hover:bg-love-700"
          >
            Subscribe
          </Button>
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
