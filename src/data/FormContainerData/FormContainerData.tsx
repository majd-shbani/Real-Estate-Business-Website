import { Link } from "react-router-dom";

export const DEFAULT_FORM_DATA = {
    terms: { 
        text: (
            <>
                I agree with <Link to={'#'} className="underline hover:text-Indigo hover:dark:text-purple-60 decoration-gray-30 hover:decoration-Indigo hover:dark:decoration-purple-60 cursor-pointer">Terms of Use</Link> and <Link to={'#'} className="underline hover:text-Indigo hover:dark:text-purple-60 decoration-gray-30 hover:decoration-Indigo hover:dark:decoration-purple-60  cursor-pointer">Privacy Policy</Link>
            </>
        )
    },
    button: { text: "Send Your Message" }
}