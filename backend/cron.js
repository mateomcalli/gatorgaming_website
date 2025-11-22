import cron from 'node-cron'
import axios from 'axios'

const BASE_URL = process.env.BACKEND_URL || 'http://localhost:3000/'

cron.schedule('* * * * *', async () => {
  try {
    const cron_response = await axios.get(BASE_URL)
    console.log(cron_response.status)
  } catch (error) {
    console.log('Error pinging API: ', error)
  }
})