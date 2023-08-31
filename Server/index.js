import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import Razorpay from "razorpay";
const port = process.env.PORT || 6001;
import cookieParser from "cookie-parser";
/***********************  Import Router *************************************/
import paymentRoute from './Router/PaymentRouter.js'
import userAuth from './Router/UserAuth.js'
import { register } from "./Controller/UserControler.js";
import { AddressControl } from "./Controller/AddressControl.js";

/*****************  Configurations or middleware **************************/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/*****************  File storage  **************************/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
const upload = multer({ storage });

/*****************  for Razor pay payment Intrigration  **************************/
app.use("/api", paymentRoute);
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
});

/*****************  route with file **************************/
app.post("/auth/register", upload.single("picture"), register);
app.post("/address", AddressControl);
app.use("/auth", userAuth);

/*****************  Database connection  **************************/
mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log("connected with mongodb atlas");
    })
    .catch((err) => console.log("no connection"));

app.listen(port, () => console.log(`server listening at the port no ${port}`));