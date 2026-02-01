import type { FormEvent, ReactNode, RefObject } from "react";

export interface FormProps {
    children: ReactNode;
    formRef?: RefObject<HTMLFormElement | null>;
    onSubmit?: (e: FormEvent) => void;
    className?: string;
}