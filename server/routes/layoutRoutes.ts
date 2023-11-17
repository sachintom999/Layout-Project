import express from "express"
import { createLayout, getLayouts } from "../controllers/layoutController"

export const router = express.Router()

router.post("/", createLayout)
router.get("/", getLayouts)
