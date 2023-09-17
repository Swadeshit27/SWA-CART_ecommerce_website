import express from "express";
import { AddressControl, DeleteAddress, UpdateAddress } from "../Controller/ProductsControl.js";
const router = express.Router();

router.post("/add", AddressControl);
router.post("/update", UpdateAddress);
router.post("/delete", DeleteAddress);

export default router;