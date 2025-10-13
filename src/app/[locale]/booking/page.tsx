'use client'
import Step1 from "@/components/main/booking/Step1";
import Step2 from "@/components/main/booking/Step2";
import Step3 from "@/components/main/booking/Step3";
import Step4 from "@/components/main/booking/Step4";
import LocaleSwitcher from "@/components/shared/LocaleSwitcher";
import Logo from "@/components/shared/Logo";
import { JSX, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
const steps = [1, 2, 3];

const stepComponents: Record<number, (props: { nextStep: () => void }) => JSX.Element> = {
    1: ({ nextStep }) => <Step1 nextStep={nextStep} />,
    2: ({ nextStep }) => <Step2 nextStep={nextStep} />,
    3: ({ nextStep }) => <Step3 nextStep={nextStep} />,
};

export default function BootingPage() {
    const [activeStep, setActiveStep] = useState(1);
    const [completed, setCompleted] = useState(false);

    const nextStep = () => {
        if (activeStep < steps.length) {
            setActiveStep((prev) => prev + 1);
        } else {
            setCompleted(true);
        }
    };

    return (
        <div className="mx-2  flex flex-col hero-height">
            <div className="border-b border-b-gray py-3 flex items-center justify-center gap-5">
                <Logo className="justify-center" />
                <LocaleSwitcher />
            </div>

            <div className="flex-1 flex flex-col container pt-12 pb-6">
                {!completed ? (
                    <>
                        {/* Stepper */}
                        <div className="relative mx-auto w-fit mb-10">
                            <div className="z-[1] absolute h-[1px] bg-lighter w-[calc(100%-20px)] top-1/2 -translate-y-1/2 start-[10px]" />
                            <div className="relative z-[2] flex justify-center items-center gap-10">
                                {steps.map((step) => {
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

                        {/* Current Step */}
                        <div className="flex-1 flex flex-col ">{stepComponents[activeStep]({ nextStep })}</div>
                    </>
                ) : (
                    <Step4 /> // success screen, no stepper
                )}
            </div>
        </div>
    );
}
