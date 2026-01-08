/* eslint-disable @typescript-eslint/naming-convention */
import { MainScene } from './main'
import { MeetingScene } from './meeting'
import { TitleScene } from './title'
import { SceneMap } from './types'

export const scenes: SceneMap = {
  TitleScene: new TitleScene(),
  MainScene: new MainScene(),
  MeetingScene: new MeetingScene(),
}
