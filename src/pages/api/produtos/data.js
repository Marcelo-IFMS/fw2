
import {esporte} from "./produtos";

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'POST' })
  }else if (req.method === 'GET') {
    res.status(200).json(esporte)
  } else {
    // Handle any other HTTP method  https://www.youtube.com/watch?v=hpI-d39hUWY
  }
}