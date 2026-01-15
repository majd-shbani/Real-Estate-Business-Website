import { useNavigate } from "react-router-dom";
import type { ButtonProps } from "../../interfaces/Button/Button"

const Button = ({ text, to, className }: ButtonProps) => {
      const navigate = useNavigate();

      const handleClick = () => {
            if (to) {
                  navigate(to);
            }
      };

      return (
            <button
                  onClick={handleClick}
                  className={`px-5 py-3.5 text-[14px] font-medium rounded-lg cursor-pointer border border-gray-15 
                              2xl:px-6 2xl:py-4.5 2xl:text-[18px] 2xl:rounded-[10px] ${className}`}>
                  {text}
            </button>
      )
}

export default Button
