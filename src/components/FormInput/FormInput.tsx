import type { FormInputProps } from "../../interfaces/FormInput/FormInput"

const FormInput = ({input, isActive, showAction, onActionClick, className}: FormInputProps) => {

  const isDisabled = showAction ? !isActive : false;

  return (
    <div className={`flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 ${showAction ? 'cursor-pointer' : ''}`} onClick={showAction ? onActionClick : undefined}>
        <label htmlFor={input.name} className={`font-semibold leading-[150%] xl:text-base 2xl:text-xl ${input.hideLabel ? 'hidden md:block md:invisible' : ''}`}>{input.label || '\u00A0'}</label>
        <div className={`flex items-center gap-1.5 2xl:gap-3 bg-gray-10 border border-gray-15 rounded-md 2xl:rounded-lg px-5 py-4 2xl:py-6 ${className}`}>
          {input.icon && <img src={input.icon} alt={input.alt} className="w-5 2xl:w-6" />}

          {input.type === "select" ? (
            <div className="relative w-full flex items-center">
              <select 
                id={input.name}
                name={input.name} required
                value={input.value}
                defaultValue={input.defaultValue}
                onChange={input.onChange}
                autoComplete={input.autoComplete || "off"}
                className={`text-sm 2xl:text-lg placeholder:text-gray-40 w-full focus:outline-none bg-transparent text-gray-40 appearance-none pr-8 z-10 cursor-pointer ${input.className}`}
              >
                <option value="" className="bg-gray-10">{input.placeholder}</option>
                {input.options?.map((option, index) => (
                  <option key={index} value={option} className="bg-gray-10">
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-0 flex items-center text-gray-40">
                <img src="assets/icons/drop.svg" alt="arrow-icon" className="w-5 h-5 2xl:w-full" />
              </div>
            </div>
            
          ) : input.type === "textarea" ? (
            <textarea name={input.name} placeholder={input.placeholder} 
              id={input.name}
              value={input.value}
              defaultValue={input.defaultValue}
              onChange={input.onChange}
              autoComplete={input.autoComplete || "on"}
              className={`h-14.5 xl:h-[6.111111vw] 2xl:h-[6.25vw] placeholder:font-medium placeholder:text-gray-40 placeholder:text-sm placeholder:2xl:text-lg placeholder:leading-5 w-full bg-transparent focus:outline-none resize-none ${input.className}`} />
          ) : (
            <input type={input.type} name={input.name} placeholder={input.placeholder} disabled={isDisabled} required
              id={input.name}
              value={input.value}
              defaultValue={input.defaultValue}
              onChange={input.onChange}
              autoComplete={input.autoComplete || "on"}
              className={`text-sm placeholder:font-medium placeholder:text-gray-40 placeholder:text-sm placeholder:2xl:text-lg placeholder:leading-5 w-full bg-transparent focus:outline-none ${input.className}`} />
          )}
          {showAction && (
            <div
              className={`w-2.5 h-2.5 2xl:w-4 2xl:h-4 border border-purple-60 rounded-full transition-all shrink-0
                ${isActive 
                  ? 'bg-purple-60' 
                  : 'bg-transparent'
                }`}
            />
          )}
        </div>
    </div>
  )
}

export default FormInput