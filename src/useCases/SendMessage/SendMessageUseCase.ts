// import { IUsersRepository } from "../../repositories/IUsersRepository";
// import { ICreateUserRequestDTO } from "./CreateUserDTO";
// import { User } from "../../entities/User";
import { IApiVipProvider } from "@src/provider/IApiVipProvider";

export class SendMessageUseCase {
    constructor(
        // private usersRepository: IUsersRepository,
        private apiVipProvider: IApiVipProvider,
    ) { }

    async execute() {
        return await this.apiVipProvider.getUsersByPage(1);
    }
}