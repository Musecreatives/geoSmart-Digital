const { default: axios } = require("axios")

export default async function checkCert(cert_id) {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/certificate/validate/${cert_id}`)
        
        return {data:response.data, status:response.status}
    } catch (err) {
        return { data:err?.response?.data, status:err.status }
    }
}

