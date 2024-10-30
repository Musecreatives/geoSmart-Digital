const { default: axios } = require("axios")

export default async function checkCert(certId) {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/${certId}`)
        return {data:response.data, status:response.status}
    } catch (err) {
        return { data:err?.response?.data, status:err.status }
    }
}

