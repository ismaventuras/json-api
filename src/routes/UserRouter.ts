import { Router } from "express";
import {createUser, getUser, deleteUser, updateUser, index} from "../controllers/UserController";
let router = Router()


router.route("/")
    .post(createUser)
    .get(index)
router.route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

export default router
