'use client';

import { JSX, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Logo from '@/components/shared/Logo';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';

const steps = [1, 2, 3];

const stepComponents: Record<number, (props: { nextStep: () => void }) => JSX.Element> = {
    1: ({ nextStep }) => <Step1 nextStep={nextStep} />,
    2: ({ nextStep }) => <Step2 nextStep={nextStep} />,
    3: ({ nextStep }) => <Step3 nextStep={nextStep} />,
};

export default function Booking() {
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
        <div className="mx-2 flex flex-col hero-height">
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
                        <div className="flex-1 flex flex-col">
                            {stepComponents[activeStep]({ nextStep })}
                        </div>
                    </>
                ) : (
                    <Step4 />
                )}
            </div>
        </div>
    );
}
