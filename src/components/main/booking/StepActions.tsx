import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

interface FormActionsProps {
    onConfirm: () => void;
    onCancel: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    isDisabled?: boolean;
}

export default function FormActions({
    onConfirm,
    onCancel,
    confirmLabel = 'Book Now',
    cancelLabel = 'Cancel',
    isDisabled = false,
}: FormActionsProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 ">
            <SecondaryButton
                onClick={onConfirm}
                className="bg-secondary hover:bg-secondary-hover text-white py-2 lg:py-3 w-full sm:w-[323px]"
                disabled={isDisabled}
            >
                {confirmLabel}
            </SecondaryButton>

            <SecondaryButton
                onClick={onCancel}
                className="bg-[#F5F6F8] hover:bg-[#E9EAEC] text-[#B3B3B3] py-2 lg:py-3 w-full sm:w-[323px]"
            >
                {cancelLabel}
            </SecondaryButton>
        </div>
    );
}
