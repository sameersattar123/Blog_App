import jwt from "jsonwebtoken";
import HttpError from "../models/errorModel.js";

const authMiddelware = async (req, res, next) => {
  const Authorization = req.headers.Authorization || req.headers.authorization;

  if (Authorization && Authorization.startsWith("Bearer")) {
    const token = Authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, info) => {
      if (error) {
        return next( new HttpError("Not authorized , token is invalid", 401));
      }
      req.user = info; 
      next();
    });
  } else {
    return next(new HttpError("Not authorized, no token found", 401));
  }
};

export default authMiddelware;
