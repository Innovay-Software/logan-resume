import ReactGA from 'react-ga4'
import './globals.css'
import Home from './home'
import { promises as fs } from 'fs'
import { UserDataInterface } from './interfaces/userDataInterface'

export default async function Main() {
  const userDataJson = await fs.readFile(
    process.cwd() + '/UserData.json',
    'utf8'
  )
  const userData: UserDataInterface = JSON.parse(userDataJson)
  ReactGA.initialize('G-XEZ971T5PJ')
  ReactGA.send({ hitType: 'pageview', page: '/', title: 'Logan Dai' })

  return <Home userData={userData} />
}
