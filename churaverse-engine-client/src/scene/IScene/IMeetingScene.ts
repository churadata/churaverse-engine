import { EventBus } from '../../eventbus/eventBus'
import { Store } from '../../store/store'
import { BaseScene } from './baseScene'

export abstract class IMeetingScene extends BaseScene {
  protected readonly store = new Store<IMeetingScene>()
  protected readonly eventBus = new EventBus<IMeetingScene>()

  public constructor() {
    super('MeetingScene', {
      key: 'MeetingScene',
      active: false,
    })
  }

  public init(): void {
    super.preInit()
    this.initUtilStore()
    super.init()
  }

  public initUtilStore(): void {
    this.store.setInit('util', {
      focusedRenderer: undefined,
    })
  }
}
