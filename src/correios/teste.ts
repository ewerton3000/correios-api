import axios from "axios"

export const useViaCepService = () => {
    const getAddress = async (cep: string) => {
        const resp = await axios.get('https://viacep.com.br/ws/${cep}/json/')

        console.log(resp)
    }

    return { getAddress }
}