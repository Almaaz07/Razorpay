import express from "express";
import { checkout , PaymentVerification} from "../controllers/paymentController.js";

const router= express.Router()
router.route("/checkout").post(checkout)
router.route("/paymentverification").post(PaymentVerification)




export default router;