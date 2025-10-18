import Logo from "@/components/shared/Logo";


export default function EmptyChatState() {
    return (
        <div className="h-full flex-center flex flex-col items-center justify-center text-center gap-6 px-4">
            <Logo />
            <p className="text-lg text-gray-500 font-medium">
                Select a conversation to start messaging
            </p>
        </div>
    );
}
