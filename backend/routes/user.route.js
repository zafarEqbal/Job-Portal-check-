import express from "express" ;
import { register } from "../controllers/user.controller.js";
import { login } from "../controllers/user.controller.js";
import { updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { logout } from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router() ;

router.route("/register").post(singleUpload,register) ;
router.route("/login").post(login) ;
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile) ;
router.route("/logout").get(logout) ;

export default router ;
