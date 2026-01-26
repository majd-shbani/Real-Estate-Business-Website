import { useRef, useState, type FormEvent } from "react"
import { BookingInputsData, BudgetAndMethodData, HEADER_DEFAULT_DATA, MessageData } from "../../data/PropertyBookingSection/PropertyBookingSection"
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput"
import Section from "../Section/Section"
import emailjs from '@emailjs/browser';

const PropertyBookingSection = () => {
  const [activeId, setActiveId] = useState<number | null>(10);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const SERVICE_ID = "service_id";
    const TEMPLATE_ID = "template_id";
    const PUBLIC_KEY = "key"

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          alert("Success! Your request has been sent.");
          form.current?.reset();
      }, (error) => {
          alert("Failed: " + error.text);
      });
  };

  return (
    <Section 
      title={HEADER_DEFAULT_DATA.title}
      description={HEADER_DEFAULT_DATA.description}
    >
      <FormContainer formRef={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 2xl:gap-12.5 mb-5 md:mb-10 2xl:mb-12.5">
          {BookingInputsData.map((input) => (
            <FormInput key={input.id} input={input} />
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 md:gap-7.5 2xl:gap-12.5 mb-5 md:mb-10 2xl:mb-12.5">
          <div className="col-span-2">
            <FormInput key={BudgetAndMethodData[0].id} input={BudgetAndMethodData[0]} />
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {BudgetAndMethodData.slice(1).map((input) => (
              <FormInput key={input.id} input={input} showAction={true} isActive={activeId === input.id} onActionClick={() => setActiveId(input.id)} />
            ))}
          </div>
          <input type="hidden" name="selectedMethod" value="" />
          <input type="hidden" name="contactValue" value="" />
        </div>
        <FormInput input={MessageData}/>
      </FormContainer>
    </Section>
  )
}

export default PropertyBookingSection