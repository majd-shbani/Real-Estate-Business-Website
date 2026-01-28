{/* <InquireAboutSeaside/> */}
import { useRef } from "react";
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput";
import Section from "../Section/Section"
import { InquireAboutSeaSideFormData } from "../../data/InquireAboutSeaSideFormData/InquireAboutSeaSideFormData";

const InquireAboutSeaside = () => {
    const formRef = useRef<HTMLFormElement>(null);
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
    
            if (!formRef.current) return;
    
            const formData = new FormData(formRef.current);
            console.log(Object.fromEntries(formData.entries()));
        };

    return (
        <section className="px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw] my-20 xl:my-30 2xl:my-[150px] flex flex-col justify-between xl:flex-row">
            <Section title="Inquire About Seaside Serenity Villa"
                    description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
                    className="xl:w-[27.0312vw]! px-0! m-0!"
            />
            <FormContainer formRef={formRef} onSubmit={handleSubmit}>
                {/* First Name + Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[30px]">
                    {InquireAboutSeaSideFormData
                    .filter(item => item.name === "firstName" || item.name === "lastName")
                    .map(input => (
                        <FormInput key={input.id} input={input} />
                    ))}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[30px] mt-5 2xl:mt-[30px]">
                    {InquireAboutSeaSideFormData
                    .filter(item => item.name === "email" || item.name === "phone")
                    .map(input => (
                        <FormInput key={input.id} input={input} />
                    ))}
                </div>

                {/* Selected Property */}
                <div className="mt-5 2xl:mt-[30px]">
                    {InquireAboutSeaSideFormData
                    .filter(item => item.name === "SelectedProperty")
                    .map(input => (
                        <FormInput key={input.id} input={input} />
                    ))}
                </div>

                {/* Message textarea */}
                <div className="mt-5 2xl:mt-[30px]">
                    {InquireAboutSeaSideFormData
                    .filter(item => item.name === "Message")
                    .map(input => (
                        <FormInput key={input.id} input={input} />
                    ))}
                </div>
            </FormContainer>
        </section>
    )
}

export default InquireAboutSeaside
