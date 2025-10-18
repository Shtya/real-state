export type User = {
    id: number;
    imageSrc: string;
    name: string;
    lastMessage: string;
}

export type Message = {
    sender: string;
    role: "guest" | "host" | 'support';
    timestamp: string;
    content: string;
};
