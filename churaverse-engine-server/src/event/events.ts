import { IMainScene } from '../scene/IScene/IMainScene'
import { IMeetingScene } from '../scene/IScene/IMeetingScene'
import { ITitleScene } from '../scene/IScene/ITitleScene'
import { Scenes } from '../scene/types'
import { CVEvent } from './cvEvent'

/**
 * TitleSceneのEvent
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CVTitleEventMap {}

/**
 * MainSceneのEvent
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CVMainEventMap {}

/**
 * MeetingSceneのEvent
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CVMeetingEventMap {}

export type CVEventMap<Scene extends Scenes> = Scene extends ITitleScene
  ? CVTitleEventMap & { [type: string]: CVEvent<ITitleScene> }
  : Scene extends IMainScene
  ? CVMainEventMap & { [type: string]: CVEvent<IMainScene> }
    : Scene extends IMeetingScene
      ? CVMeetingEventMap & { [type: string]: CVEvent<IMeetingScene> }
  : never

export type CVTitleEventType = keyof CVTitleEventMap
export type CVMainEventType = keyof CVMainEventMap
export type CVMeetingEventType = keyof CVMeetingEventMap
export type CVEventType<Scene extends Scenes> = Scene extends ITitleScene
  ? CVTitleEventType
  : Scene extends IMainScene
  ? CVMainEventType
    : Scene extends IMeetingScene
      ? CVMeetingEventType
  : never
