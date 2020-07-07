export declare enum StepSize {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export declare type StepClasses = {
    line?: string;
    step?: string;
    label?: string;
};
export declare type StepIndicatorClasses = {
    prevStep?: StepClasses;
    currentStep?: StepClasses;
    nextStep?: StepClasses;
};
export declare type LineType = 'solid' | 'dotted' | 'dashed';
export declare type Line = {
    color?: string;
    type?: LineType;
};
export declare type StepStyles = {
    bg?: string;
    text?: string;
    bottomText?: string;
};
export declare const STEP_VARIANTS: Readonly<{
    PREV: string;
    CURRENT: string;
    NEXT: string;
}>;
export declare type StepIndicatorTheme = {
    prevStep: StepStyles;
    currentStep: StepStyles;
    nextStep: StepStyles;
    linePrev: Line;
    lineNext: Line;
};
export declare const defaultTheme: {
    prevStep: {
        bg: string;
        text: string;
        bottomText: string;
    };
    currentStep: {
        bg: string;
        text: string;
        bottomText: string;
    };
    nextStep: {
        bg: string;
        text: string;
        bottomText: string;
    };
    linePrev: {
        color: string;
        type: LineType;
    };
    lineNext: {
        color: string;
        type: LineType;
    };
};
