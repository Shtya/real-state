import { MdClose } from "react-icons/md";

import ConversationThread from "./ConversationThread";
import EmptyChatState from "./EmptyChatState";
import { Message, User } from "@/types/dashboard/chat";

interface MobileChatPanelProps {
    selectedUser?: User;
    selectedChatId?: number;
    messagesMap: Record<number, Message[]>;
    handleSendMessage: (content: string) => void;
    handleCloseThread: () => void;
    isOpen: boolean;
}

export default function MobileChatPanel({
    selectedUser,
    selectedChatId,
    messagesMap,
    handleSendMessage,
    handleCloseThread,
    isOpen,
}: MobileChatPanelProps) {
    return (
        <div
            className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out md:hidden bg-white ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {selectedUser ? (
                <ConversationThread
                    className="h-full overflow-hidden px-4 py-6"
                    messages={messagesMap[selectedChatId!] || []}
                    participant={{
                        name: selectedUser.name,
                        imageSrc: selectedUser.imageSrc,
                    }}
                    onSendMessage={handleSendMessage}
                />
            ) : (
                <EmptyChatState />
            )}
            <button
                onClick={handleCloseThread}
                className="absolute top-4 end-4 text-gray-500 hover:text-gray-800"
            >
                <MdClose size={28} />
            </button>
        </div>
    );
}
