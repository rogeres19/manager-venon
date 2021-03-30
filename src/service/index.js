import axios from 'axios';


class Api {

    baseUrl = "https://plataforma.vip/api/";
    axiosInstance = null;
    token = null;

    constructor() {
        this.token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo2NjEwLCJzZXNzaW9uX2lkIjoiei9aRERHQmlETmNTNmpxcUF3T3FBZyIsImlkX2Zvcl9zZXNzaW9uIjoiX3Y2YjA2ZTM4aSIsImVtYWlsIjoicm9nZXJlczE5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiUm9nZXJlc1NhbnRvcyIsImlkX3h0cmVhbSI6MTAwNDg2OSwiaW5fZGF0ZSI6IjIwMTktMDYtMTlUMDA6MTc6MzIuMDAwWiIsInR5cGVfYWNjb3VudCI6MSwicmVzZWxsZXJfb2YiOjIsImlzX2Jhbm5lZCI6MCwicGxhbl9pZCI6MTEsImNvbXBhbnlfbmFtZSI6bnVsbCwicmVzZWxsZXJfY29tcGFueV9uYW1lIjoiQ2wgU2VydmVycyIsInN0YXR1c19hY2NvdW50IjoxLCJkYXRlX3Nlc3Npb25fc3RhcnQiOjE2MTcwNTU5MTB9LCJleHAiOjE2MTcwNzM5MTAsImlhdCI6MTYxNzA1NTkxMH0.tRNLFTzQK2mZj0P6v6D8RvYI5a39KzLOAfVMpWOgJO8";

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
            return response;
        } catch (error) {
            console.error(error);
        }
    }


}

export default Api;