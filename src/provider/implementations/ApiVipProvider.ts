import axios, { AxiosInstance } from 'axios';
import { IApiVipProvider } from '../IApiVipProvider';


class ApiVipProvider implements IApiVipProvider {

    private baseUrl = "https://plataforma.vip/api/";
    private axiosInstance: AxiosInstance;
    private token = '';

    constructor() {
        this.token = 'Bearer ' + process.env.TOKEN;
        this.createAxiosInstance();
    }

    createAxiosInstance() {
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            timeout: 1000,
            headers: { 'authorization': `${this.token}` }
        });
    }

    async getUsersByPage(page = 1) {
        const query = `lists?from=null&p=${page}&r=0&s=null&sort-by=id&sort-desc=true&to=null&type=6`;
        try {
            const response = await this.axiosInstance.get(query);
            return response.data;
        } catch (error) {
            return error.data;
        }
    }


}

export default ApiVipProvider;