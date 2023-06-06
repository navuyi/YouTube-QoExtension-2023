import * as express from "express"

import urlRouter from "./routes/url"

const app = express()


app.use("/yt", urlRouter)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})