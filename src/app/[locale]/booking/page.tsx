'use client'
import Step1 from "@/components/main/booking/Step1";
import Step2 from "@/components/main/booking/Step2";
import Step3 from "@/components/main/booking/Step3";
import Step4 from "@/components/main/booking/Step4";
import LocaleSwitcher from "@/components/shared/LocaleSwitcher";
import Logo from "@/components/shared/Logo";
import { JSX, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const steps = [1, 2, 3, 4];

const stepComponents: Record<number, (props: { nextStep: () => void }) => JSX.Element> = {
    1: ({ nextStep }) => <Step1 nextStep={nextStep} />,
    2: ({ nextStep }) => <Step2 nextStep={nextStep} />,
    3: ({ nextStep }) => <Step3 nextStep={nextStep} />,
    4: () => <Step4 />,
};

export default function BootingPage() {
    const [activeStep, setActiveStep] = useState(1);

    const nextStep = () => {
        setActiveStep((prev) => Math.min(prev + 1, 4));
    };

    return (
        <div className="mx-2">
            <div className="border-b border-b-gray py-3 flex items-center justify-center gap-5">
                <Logo className="justify-center" />
                <LocaleSwitcher />
            </div>
            <div className="container py-12">
                <div className="relative mx-auto w-fit mb-10">
                    <div className="z-[1] absolute h-[1px] bg-lighter w-[calc(100%-20px)] top-1/2 -translate-y-1/2 start-[10px]" />
                    <div className="relative z-[2] flex justify-center items-center gap-10">
                        {[1, 2, 3, 4].map((step) => {
                            const isActive = step === activeStep;
                            const isCompleted = step < activeStep;

                            return (
                                <div
                                    key={step}
                                    className={`rounded-full flex-center w-[50px] h-[50px] text-2xl ${isCompleted
                                        ? 'bg-secondary text-white'
                                        : isActive
                                            ? 'bg-secondary text-white'
                                            : 'bg-lighter text-dark'
                                        }`}
                                >
                                    {isCompleted ? <IoMdCheckmark size={32} /> : step}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>{stepComponents[activeStep]({ nextStep })}</div>
            </div>
        </div>
    );
}
