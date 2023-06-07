import * as express from "express"
import * as cors from "cors"
import urlRouter from "./routes/url"

const app = express()

app.use(cors({
    origin: ["https://www.youtube.com"]
}))
app.use("/yt", urlRouter)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})