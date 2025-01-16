import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: "dj0hx0vtm",
	api_key: "812662848193686",
	api_secret: "jIto9pAngoTRx0bKmMA0KY_S80k",
});

export default cloudinary;
