'use client';

import { MessageCircle } from 'lucide-react';
import { whatsappMessage } from '@/data/company';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  context?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export function WhatsAppButton({
  context,
  label = 'Chat on WhatsApp',
  variant = 'primary',
  className,
}: WhatsAppButtonProps) {
  const styles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-white text-primary border border-primary hover:bg-primary/5',
    ghost: 'bg-transparent text-white border border-white/40 hover:bg-white/10',
  };

  return (
    <a
      href={whatsappMessage(context)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200',
        styles[variant],
        className
      )}
    >
      <MessageCircle size={16} strokeWidth={2} />
      {label}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappMessage()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ScrubXpert on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  );
}
