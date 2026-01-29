export interface EmployeeCardProps {
    card: {
        id: string | number;
        image: string;
        name: string;
        position: string;
    }
    onEdit?: (id: string | number) => void;
    onDelete?: (id: string | number) => void;
}