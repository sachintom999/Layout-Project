import mongoose, { Schema, Document } from "mongoose"

interface Location {
    lat: number
    long: number
}

interface Layout extends Document {
    name: string
    description: string
    image?: string
    location: Location
}

const locationSchema = new Schema<Location>({
    long: { type: Number, required: true },
    lat: { type: Number, required: true },
})

const layoutSchema = new Schema<Layout>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: locationSchema, required: true },
    image: { type: String, required: true },
})

const LayoutModel = mongoose.model("Layout", layoutSchema)

export default LayoutModel


