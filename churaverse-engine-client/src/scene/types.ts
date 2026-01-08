/* eslint-disable @typescript-eslint/naming-convention */
import { IMainScene } from './IScene/IMainScene'
import { IMeetingScene } from './IScene/IMeetingScene'
import { ITitleScene } from './IScene/ITitleScene'

export type Scenes = ITitleScene | IMainScene | IMeetingScene

export interface SceneMap {
  TitleScene: ITitleScene
  MainScene: IMainScene
  MeetingScene: IMeetingScene
}

export type SceneName = keyof SceneMap
