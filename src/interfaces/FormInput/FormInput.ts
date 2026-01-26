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
    }
    isActive?: boolean;
    showAction?: boolean;  
    onActionClick?: () => void;
}