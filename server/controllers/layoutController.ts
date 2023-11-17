import { Request, Response } from "express"
import { z } from "zod"
import Layout from "../models/layoutModel"

const locationSchema = z.object({
    long: z.number(),
    lat: z.number(),
})

const layoutSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    location: locationSchema,
})

export const createLayout = async (req: Request, res: Response) => {
    try {
        const parsedData = layoutSchema.safeParse(req.body)

        if (!parsedData.success) {
            return res.status(500).json({ error: "Bad Request" })
        }

        const layout = await Layout.create(parsedData.data)
        return res.status(201).json(layout)
    } catch (error) {
        return res.status(500).json(error)
    }
}
