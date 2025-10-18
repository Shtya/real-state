'use client'

import { useState } from "react";
import ChatInterface from "./ChatInterface";
import { Message } from "@/types/dashboard/chat";


const supportUser = {
  id: 99,
  imageSrc: "/users/default-user.png",
  name: "Qunuf Support",
  lastMessage: "Let us know how we can assist you.",
};

const supportMessages: Record<number, Message[]> = {
  99: [
    {
      sender: "Qunuf Support",
      role: "support",
      timestamp: "Oct 18, 2025, 1:00 PM",
      content: "Welcome to Qunuf Support! How can we help you today?",
    },
  ],
};

export default function SupportChats() {
  const [messagesMap, setMessagesMap] = useState<Record<number, Message[]>>(supportMessages);

  return (
    <div className="container">
      <ChatInterface
        users={[supportUser]}
        messagesMap={messagesMap}
        onUpdateMessages={(chatId, newMessages) =>
          setMessagesMap((prev) => ({ ...prev, [chatId]: newMessages }))
        }
      />
    </div>
  );
}
