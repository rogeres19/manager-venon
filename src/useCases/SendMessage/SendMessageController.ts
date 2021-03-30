import { Request, Response } from "express"
import { SendMessageUseCase } from "./SendMessageUseCase"

export class SendMessageController {

    constructor(
        private sendMessageUseCase: SendMessageUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            let res = await this.sendMessageUseCase.execute();
            console.log(res);

            response.status(200).json(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}