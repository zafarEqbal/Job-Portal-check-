import express from "express" ;
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router() ;

router.route("/apply/:id").get(isAuthenticated,applyJob) ;
router.route("/get").get(isAuthenticated,getAppliedJobs) ;
router.route("/status/:id/update").post(isAuthenticated,updateStatus) ;
router.route("/:id/applicants").get(isAuthenticated,getApplicants) ;
export default router ;
