/* eslint-disable @typescript-eslint/naming-convention */
import { IMainScene } from './IScene/IMainScene'
import { IMeetingScene } from './IScene/IMeetingScene'
import { ITitleScene } from './IScene/ITitleScene'

export interface SceneMap {
  TitleScene: ITitleScene
  MainScene: IMainScene
  MeetingScene: IMeetingScene
}

export type Scenes = SceneMap[keyof SceneMap]
export type SceneName = keyof SceneMap
