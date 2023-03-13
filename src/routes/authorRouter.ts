import {Author}   from "../models/author"
import express    from "express"

const authorRouter = express.Router()

authorRouter.post('/new', async (req, res) => {
  try {
    const author = new Author(req.body)
    await author.save()
    res.send(author)
  } catch(err) {
    console.error(err)
  }
})

authorRouter.get('/:id', async (req, res)=>{
  try {
    const author = await Author.findById(req.params.id)
    res.send(author)
  } catch(err) {
    console.error(err)
  }
})

export default authorRouter