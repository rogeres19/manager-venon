
export interface IApiVipProvider {
    getUsersByPage(page: number): Promise<void>;
}