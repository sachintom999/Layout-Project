import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"
import mongoose from "mongoose"
import { router as layoutRoutes } from "./routes/layoutRoutes"

dotenv.config()
const app: Express = express()
const port: string = process.env.PORT as string | "4000"

app.use(express.json())
app.use("/layouts", layoutRoutes)


app.post("/me", (req: Request, res: Response) => {
    const { user } = req.body

    const response = {
        id: `${user}_583c3ac3f38e84297c002546`,
        email: `${user}-email@gmail.com`,
        name: `${user}-name`,
        role: user.charAt(0).toUpperCase() + user.slice(1),
    }

    res.json(response)
})

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
