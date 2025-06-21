import { StatusCodes } from 'http-status-codes'
import {boardService} from '~/services/boardService'


const createNew = async(req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    // dieu huong du lieu sang tang service
    const createdBoard = await boardService.createNew(req.body)

    // co jet qua thi tra ve phia client
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}