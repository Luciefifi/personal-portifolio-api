import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.JPG' && ext !== '.jpeg' && ext !== '.png') {
        cb(new Error('unsupported file type!'), false);
        return;
    }
    cb(null, true);
};

const multipleUpload = multer({
    storage,
    fileFilter,
}).array('image',5);

export default multipleUpload;
