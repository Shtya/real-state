import Image from "next/image";

type ChatPreviewProps = {
    imageSrc: string;
    name: string;
    lastMessage: string;
    onClick?: () => void;
    selected: boolean
};

export default function ChatPreviewCard({ imageSrc, name, lastMessage, onClick, selected }: ChatPreviewProps) {
    return (
        <div
            className={`border-b border-b-gray cursor-pointer ${selected ? "bg-gray-100" : ""}`}
            onClick={onClick}
        >
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition ">
                {/* Profile Image */}
                <div className="shrink-0 w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={`${name}'s profile`}
                        width={56}
                        height={56}
                        className="object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <h4 className="text-base font-semibold text-dark">{name}</h4>
                    <p className="text-sm text-dark line-clamp-2 ">{lastMessage}</p>
                </div>

            </div>
        </div>
    );
}
