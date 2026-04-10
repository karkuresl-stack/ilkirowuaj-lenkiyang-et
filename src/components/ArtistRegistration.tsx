import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mic2, Music, Link as LinkIcon, Mail, Phone, User, Info, Upload } from 'lucide-react';
import { toast } from 'sonner';

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  genre: z.string().min(1, { message: 'Please select a genre.' }),
  bio: z.string().min(20, { message: 'Bio must be at least 20 characters.' }),
  portfolio: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.string().length(0)),
});

const ArtistRegistration = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      genre: '',
      bio: '',
      portfolio: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success('Registration request submitted!', {
      description: 'Our team will review your application and get back to you soon.',
    });
    form.reset();
  }

  return (
    <section id="register" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Register as a <span className="text-primary">Gospel Artist</span></h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of artists globally. Be visible to event planners, churches, and festivals worldwide.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Global Visibility', desc: 'Get seen by thousands of organizers looking for gospel talent.', icon: Music },
                { title: 'Performance Tracking', desc: 'Monitor your growth and engagement through our advanced dashboard.', icon: Info },
                { title: 'Secure Communication', desc: 'Connect directly with booking agents via our secure platform.', icon: User },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "This registry changed my ministry's reach. I've had more international bookings in 6 months than in the past 5 years combined."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">SM</div>
                <div>
                  <div className="font-bold">Samuel Mike</div>
                  <div className="text-sm text-muted-foreground">Contemporary Gospel Artist</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-3xl border border-border shadow-xl shadow-primary/5"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name / Stage Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="John Doe" className="pl-10" {...field} />
                          </div>
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="john@example.com" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="+1 234 567 890" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Musical Genre</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select genre" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="contemporary">Contemporary</SelectItem>
                            <SelectItem value="worship">Worship</SelectItem>
                            <SelectItem value="traditional">Traditional</SelectItem>
                            <SelectItem value="reggae">Gospel Reggae</SelectItem>
                            <SelectItem value="jazz">Jazz Gospel</SelectItem>
                            <SelectItem value="afrobeat">Afro-Gospel</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio/Social Link (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input placeholder="https://instagram.com/artist" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist Bio</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your musical journey and ministry..." 
                          className="min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="p-4 border-2 border-dashed rounded-xl bg-muted/30 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Upload Profile Photo</span>
                  <span className="text-xs text-muted-foreground/60">JPG, PNG up to 5MB</span>
                </div>

                <Button type="submit" className="w-full py-6 rounded-xl font-bold text-lg">
                  Submit Registration
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistRegistration;