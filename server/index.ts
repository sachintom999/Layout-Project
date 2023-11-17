import dotenv from "dotenv"
import express, { Express } from "express"
import mongoose from "mongoose"
import { router as layoutRoutes } from "./routes/layoutRoutes"

dotenv.config()
const app: Express = express()
const port: string = process.env.PORT as string | "4000"

app.use(express.json())
app.use("/layouts", layoutRoutes)

mongoose
    .connect(process.env.MONGO_URI as string, {})
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to DB listening on ${port}`)
        })
    })
    .catch(error => {
        console.log("error ===", error)
    })
