import express from "express";
import * as authController from "../controllers/auth.js";
import { body } from "express-validator";

const authRouter = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
];

const validateSignup = [
  ...validateCredential,
  body("name").notEmpty().withMessage("name is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid email"),
];

authRouter.post("/signup", validateSignup, authController.singup);

authRouter.post("/login", validateSignup, authController.login);

// router.get("/me", authController.me);

export default authRouter;
