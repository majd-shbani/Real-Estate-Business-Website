{/* <Connect/> */}
import { useRef } from "react";
import FormContainer from "../FormContainer/FormContainer"
import FormInput from "../FormInput/FormInput"
import Section from "../Section/Section"
import { ContactFormFields } from "../../data/ConnectForm/ConnectForm";

const Connect = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        console.log(Object.fromEntries(formData.entries()));
    };
    return (
        <section className="px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw] my-20 xl:my-30 2xl:my-[150px]">
            <Section title="Let's Connect"
                    description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
                    className="p-0! m-0!"
                    />
            <FormContainer formRef={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 2xl:gap-7.5">
                    {ContactFormFields.map((field) => (
                    <div
                        key={field.id}
                        className={field.type === "textarea" ? "md:col-span-3" : ""}
                    >
                        <FormInput input={field} />
                    </div>
                    ))}
                </div>
            </FormContainer>
        </section>
    )
}

export default Connect
