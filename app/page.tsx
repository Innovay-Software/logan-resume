import ReactGA from 'react-ga4'
import './globals.css'
import { promises as fs } from 'fs'
import { UserDataInterface } from './interfaces/userDataInterface'
import Home from './home'

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
