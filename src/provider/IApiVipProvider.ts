
export interface IApiVipProvider {
    getUsersByPage(page: number): Promise<any>;
}