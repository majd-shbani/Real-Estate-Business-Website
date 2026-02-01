import { DEFAULT_FORM_DATA } from "../../data/FormContainerData/FormContainerData"
import type { FormProps } from "../../interfaces/FormContainer/FormContainer"
import BaseCard from "../BaseCard/BaseCard"
import Button from "../Button/Button"

const FormContainer = ({children, formRef, onSubmit, className}: FormProps) => {
  const defaultPadding = "p-5 md:p-[3.472222vw] 2xl:p-[5.208333vw]";

  return (
    <BaseCard className={className || defaultPadding}>
      <form ref={formRef} onSubmit={onSubmit}>
        {children}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 xl:gap-0 mt-7.5 2xl:mt-12.5">
          <div className="flex items-center gap-1.5 2xl:gap-2.5">
            <input type="checkbox" className="border border-gray-15 rounded-sm w-6 h-6 2xl:w-7 2xl:h-7 bg-gray-10 checked:bg-purple-60 appearance-none" required />
            <p className="text-sm xl:text-base 2xl:text-lg text-gray-60 leading-[150%] font-medium">{DEFAULT_FORM_DATA.terms.text}</p>
          </div>
          <Button text={DEFAULT_FORM_DATA.button.text} className="w-full md:w-auto text-sm! xl:px-8.5 2xl:py-3.5 2xl:text-lg! 2xl:px-11.5 bg-purple-60 leading-6 border-0"/>
        </div>
      </form>
    </BaseCard>
  )
}

export default FormContainer