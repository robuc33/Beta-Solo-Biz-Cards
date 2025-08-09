import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    window.open('https://share.chatling.ai/s/RRnb4Xj8C7Xnxya', '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={openChat}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-105"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden sm:inline">Chat Support</span>
      </Button>
    </div>
  );
}
