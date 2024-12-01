import express from "express"

const app = express()

let name = {
    same: ["dvbwhqeb"] 
}

app.get('/', (req, res) => {
    res.send(name)
} )

app.listen(3000, ()=>{
    console.log("app running")
})