// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../utils/queryApi'
import admin from 'firebase-admin'
import { adminDB } from '../../firebase-admin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {prompt, chatId, model, session} = req.body

  if(!prompt) {
    res.status(400).json({answer: 'Отправь запрос'})
    return
  }
  if(!chatId) {
    res.status(400).json({answer: 'Некорректный id у чата'})
    return
  }

  const response = await query(prompt, chatId, model)

  const message: Message = {
    text: response || 'Спроси что-нибудь полегче',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: '/no_image.png'
    }
  }

  await adminDB
  .collection('users')
  .doc(session?.user?.email)
  .collection('chats')
  .doc(chatId)
  .collection('messages')
  .add(message)

  res.status(200).json({ answer: message.text })
}
