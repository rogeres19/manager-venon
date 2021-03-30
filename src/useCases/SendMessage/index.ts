import { SendMessageController } from "./SendMessageController";
import { SendMessageUseCase } from "./SendMessageUseCase";
import ApiVipProvider from "@src/provider/implementations/ApiVipProvider";

const apiVipProvider = new ApiVipProvider()

const sendMessageUseCase = new SendMessageUseCase(apiVipProvider)


const sendMessageController = new SendMessageController(
    sendMessageUseCase
)

export { sendMessageUseCase, sendMessageController }
