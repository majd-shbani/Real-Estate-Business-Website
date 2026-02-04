interface StarProps {
    properties?: string;
    starbg?: string;
}

const Star = ({ properties = '',starbg }: StarProps) => {
    const haloClass = starbg ? starbg : "bg-Alice-Blue dark:bg-gray-08";

    return (
        <div className={`relative bg-gray-08 dark:bg-gray-300 ${properties}`}>
            <div className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full ${haloClass}`}></div>
            <div className={`absolute -top-1/2 -right-1/2 w-full h-full rounded-full ${haloClass}`}></div>
            <div className={`absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full ${haloClass}`}></div>
            <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full ${haloClass}`}></div>
        </div>
    );
};

export default Star;
