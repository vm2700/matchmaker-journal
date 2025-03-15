
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Heart, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin 
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  age: z.string().min(1, {
    message: "Age is required.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  about: z.string().min(30, {
    message: "Tell us a bit more about yourself (minimum 30 characters).",
  }),
  lookingFor: z.string().min(30, {
    message: "Tell us what you're looking for in a partner (minimum 30 characters).",
  }),
  preferences: z.array(z.string()).optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      location: "",
      about: "",
      lookingFor: "",
      preferences: [],
      termsAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would connect to a backend API
    console.log(values);
    toast.success("Matchmaking request submitted successfully!");
    
    // Redirect to home page after successful submission
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }

  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-love-600 bg-love-100 rounded-full animate-fade-in">
              <Heart className="w-4 h-4 mr-1" />
              <span>Start Your Matchmaking Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up text-balance">
              Tell Us About <span className="text-love-600">Your Heart</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 animate-fade-up delay-100 text-balance">
              Fill out this form to help our matchmakers understand your personality, values, and what you're looking for in a relationship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-12 pb-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="p-6 bg-gray-50 rounded-xl border mb-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <User className="mr-2 h-5 w-5 text-love-600" />
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl border mb-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-love-600" />
                    About You & Your Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="about"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us about yourself</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your interests, hobbies, and what makes you unique..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include information about your interests, hobbies, and personality.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lookingFor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you looking for in a partner?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the qualities, values, and characteristics you're seeking..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Be specific about the qualities and values that matter most to you.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl border">
                  <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
                  
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms of service and privacy policy
                          </FormLabel>
                          <FormDescription>
                            By submitting this form, you agree to let our matchmakers contact you.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg bg-love-600 hover:bg-love-700"
                >
                  Submit Matchmaking Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Contact;
