'use client';

import type React from 'react';

import { useState } from 'react';
import { MoveRight, X } from 'lucide-react';
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

// AnimatedLink component
const AnimatedLink = ({
  href,
  icon,
  className,
  children,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 {className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default function Component() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

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
      message: `
Name: {formData.get('name')}
Email: {formData.get('email')}
Phone: {formData.get('phone')}
Budget: {formData.get('budget')}
Timeline: {formData.get('timeline')}

Project Info:
{formData.get('project-info')}
    `,
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
      closeForm();
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Trigger Button */}
      <AnimatedLink
        href=""
        icon={
          <MoveRight className="w-4 h-4 text-background group-hover:text-background transition-colors duration-300" />
        }
        className="bg-primary rounded-md text-background px-4 py-3"
        onClick={openForm}
      >
        connect via form
      </AnimatedLink>

      {/* Animated Form Overlay */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={closeForm}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {"Let's Connect"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeForm}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                  name="name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full"
                  name="email"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full"
                  name="phone"
                />
              </div>

              {/* Budget Field */}
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select required name="budget">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under 5,000</SelectItem>
                    <SelectItem value="5k-10k">5,000 - 10,000</SelectItem>
                    <SelectItem value="10k-25k">10,000 - 25,000</SelectItem>
                    <SelectItem value="25k-50k">25,000 - 50,000</SelectItem>
                    <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                    <SelectItem value="over-100k">Over 100,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Info Field */}
              <div className="space-y-2">
                <Label htmlFor="project-info">Project Info</Label>
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
                <Label htmlFor="timeline">Timeline</Label>
                <Select required name="timeline">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your preferred timeline" />
                  </SelectTrigger>
                  <SelectContent>
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
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Success Message Overlay */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white w-screen rounded-lg shadow-xl p-8 text-center animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600">
              Your query has been sent. We will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
