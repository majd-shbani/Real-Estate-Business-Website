import type { ChangeEvent } from "react";

export interface FormInputProps {
    input: {
        id: number;
        label?: string;
        hideLabel?: boolean;
        name: string;
        placeholder: string;
        type: string;
        icon?: string;
        alt?: string;
        options?: string[];
        value?: string | number;
        defaultValue?: string | number;
        onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
        className?: string;
        disabled?: boolean;
        autoComplete?: string;
    }
    isActive?: boolean;
    showAction?: boolean;  
    onActionClick?: () => void;
    className?: string;
}