import Router from "express";
import { sendMessageController } from "./useCases/SendMessage"

const router = Router();

router.get('/', (request, response) => {
    return sendMessageController.handle(request, response)
})

export { router }
