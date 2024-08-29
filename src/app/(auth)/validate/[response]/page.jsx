import CertificateValidSuccess from "@/components/validation_res/sucess/sucess";

const Response = () => {
    let isValid = true;
    return(
        <div>
            {
                isValid ?
                // show certifate result
                <CertificateValidSuccess />
                :
                // show not found
                null
            }
        </div>
    );
}

export default Response;