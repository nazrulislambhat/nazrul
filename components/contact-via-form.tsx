'use client';

import type React from 'react';
import { Rocket } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      to_email: 'nazrul@stacknothing.com',
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      phone: formData.get('phone'),
      budget: formData.get('budget'),
      project_info: formData.get('project-info'),
      timeline: formData.get('timeline'),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus('success');
      // Close the form immediately and show success message
      onClose();
      // Show success message for 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && submitStatus !== 'success') return null;

  return (
    <>
      {/* Animated Form Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Rocket className="h-6 w-6" />
                {'Get in touch with us'}
              </h2>
              <Button
                size="icon"
                onClick={onClose}
                className="h-8 w-8 rounded-full hover:bg-red"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full"
                  name="name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full"
                  name="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-red">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  className="w-full"
                  name="phone"
                  pattern="^\+?\d{10,15}$"
                  title="Please enter a valid phone number (10-15 digits, optional +)"
                />
              </div>

              {/* Budget Field */}
              <div className="space-y-2">
                <Label htmlFor="budget">
                  Budget <span className="text-red">*</span>
                </Label>
                <Select required name="budget">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem
                      value="under-5k"
                      className="cursor-pointer hover:bg-background hover:text-primary hover:rounded-full hover:font-semibold"
                    >
                      Under ₹5,000
                    </SelectItem>
                    <SelectItem
                      value="5k-10k"
                      className="cursor-pointer hover:bg-background hover:text-primary hover:rounded-full hover:font-semibold"
                    >
                      ₹5,000 - ₹10,000
                    </SelectItem>
                    <SelectItem
                      value="10k-25k"
                      className="cursor-pointer hover:bg-background hover:text-primary hover:rounded-full hover:font-semibold"
                    >
                      ₹10,000 - ₹25,000
                    </SelectItem>
                    <SelectItem
                      value="25k-50k"
                      className="cursor-pointer hover:bg-background hover:text-primary hover:rounded-full hover:font-semibold"
                    >
                      ₹25,000 - ₹50,000
                    </SelectItem>
                    <SelectItem
                      value="50k-100k"
                      className="cursor-pointer hover:bg-background hover:text-primary hover:rounded-full hover:font-semibold"
                    >
                      ₹50,000 - ₹100,000
                    </SelectItem>
                    <SelectItem
                      value="over-100k"
                      className="cursor-pointer hover:bg-background hover:text-primary hover:rounded-full hover:font-semibold"
                    >
                      Over ₹100,000
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Info Field */}
              <div className="space-y-2">
                <Label htmlFor="project-info">
                  Project Info <span className="text-red">*</span>
                </Label>
                <Textarea
                  id="project-info"
                  name="project-info"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full min-h-[100px] resize-none"
                />
              </div>

              {/* Timeline Field */}
              <div className="space-y-2">
                <Label htmlFor="timeline">
                  Timeline <span className="text-red">*</span>
                </Label>
                <Select required name="timeline">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your preferred timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-months-plus">6+ months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full hover:bg-red"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message Overlay */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Message Launched!
            </h3>
            <p className="text-black mb-2">
              Your message is on its way through the digital cosmos. 🌌
            </p>
            <p className="text-black/80 mb-2">
              Sit tight, our team of code wizards will conjure a reply soon!
              🧙‍♂️✨
            </p>
            <p className="text-black/40 text-sm">
              (P.S. Check your inbox for a sprinkle of magic 🪄)
            </p>
          </div>
        </div>
      )}
    </>
  );
}
