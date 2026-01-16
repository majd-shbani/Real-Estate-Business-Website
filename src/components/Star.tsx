
interface StarProps {
    properties?: string;
}

const Star = ({ properties = '' }: StarProps) => {
    return (
        <div className={`relative bg-[#141414] dark:bg-gray-300 ${properties}`}>
            <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
        </div>
    );
};

export default Star;
