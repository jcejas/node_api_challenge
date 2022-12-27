//import * as dotenv from 'dotenv' 
//dotenv.config()
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});

export const uploadFile = async (filePath, folder = 'grow') => {
    let result = {};
    try {
        result = await cloudinary.uploader.upload(filePath,{
            folder: folder
        });
        return { success: true, url: result.url};
    } catch (error) {
        return { success: false, message: error.message};
    }
}