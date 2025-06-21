/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Goi toi tang model de xu ly ban ghi newBoard
    const createdBoard = await boardModel.createNew(newBoard)
    console.log(createdBoard)

    // lay ban ghi board sau khi goi
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    console.log(getNewBoard)

    // tra ket qua ve, trong service luon phai co return
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}