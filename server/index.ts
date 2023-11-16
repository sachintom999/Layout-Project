import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"
import mongoose from "mongoose"
import LayoutModel from "./models/layoutModel"

dotenv.config()
const app: Express = express()
const port: string = process.env.PORT as string | "4000"

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    return res.json({ msg: "hello" })
})

app.post("/", async (req, res) => {
    const layout = new LayoutModel({
        name: "sample",
        description: "sample desc",
        location: { lat: 11, long: 32 },
        image: "https://image-url",
    })

    await layout.save()
})

mongoose
    .connect(process.env.MONGO_URI as string, {})
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to DB listening on ${port}`)
        })
    })
    .catch(err => {
        console.log("err ===", err)
    })
