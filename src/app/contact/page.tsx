
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader2, Bot, UserCheck } from 'lucide-react';
import { useState } from 'react';
import type { SummarizeContactFormSubmissionOutput } from '@/ai/flows/summarize-contact-form-submissions';
import { summarizeSubmissionAction } from '@/app/contact/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(500, {
      message: 'Message must not be longer than 500 characters.',
    }),
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SummarizeContactFormSubmissionOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);

    try {
      const response = await summarizeSubmissionAction(values);
      if (response) {
        setResult(response);
        toast({
          title: "Submission Received!",
          description: "Our AI has processed your request. See the summary below.",
        });
        form.reset();
      } else {
        throw new Error('Failed to get a summary.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:support@trionexdigital.com" className="text-muted-foreground hover:text-primary text-sm sm:text-base">
                    support@trionexdigital.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary text-sm sm:text-base">
                    +91 12345 67890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    123 Innovation Drive, Tech Park, <br />
                    Bengaluru, Karnataka 560100, India
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder for map */}
            <div className="h-64 bg-secondary rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps Placeholder</p>
            </div>
          </div>

          <div>
             <h2 className="font-headline text-2xl font-bold mb-8">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                        <Input placeholder="john.doe@example.com" {...field} />
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
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 12345 67890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="resize-none"
                          {...field}
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} className="w-full">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Submitting...' : 'Send Message'}
                </Button>
              </form>
            </Form>

            {result && (
              <Card className="mt-8 bg-gradient-to-br from-secondary/30 to-background dark:from-secondary/20 dark:to-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-primary text-xl md:text-2xl">
                    <Bot className="h-6 w-6" />
                    AI-Powered Routing Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Inquiry Summary:</h4>
                    <p className="text-muted-foreground italic text-sm md:text-base">
                      &quot;{result.summary}&quot;
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center gap-2">
                       <UserCheck className="h-5 w-5 text-green-500" />
                      Suggested Team Member:
                    </h4>
                    <p className="text-foreground text-base md:text-lg font-medium">{result.suggestedTeamMember}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
