
interface StarProps {
    properties?: string;
}

const Star = ({ properties = '' }: StarProps) => {
    return (
        <div className={`relative bg-gray-08 dark:bg-gray-300 ${properties}`}>
            <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-gray-08"></div>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-gray-08"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-gray-08"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-gray-08"></div>
        </div>
    );
};

export default Star;
