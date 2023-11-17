import express from "express"
import { createLayout } from "../controllers/layoutController"

export const router = express.Router()

router.post("/", createLayout)
