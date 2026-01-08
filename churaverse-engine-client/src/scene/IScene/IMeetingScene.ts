import { Store } from '../../store/store'
import { BaseScene } from './baseScene'

export abstract class IMeetingScene extends BaseScene {
  protected readonly store = new Store<IMeetingScene>()
  // eventBusはBaseSceneのものを使用（再定義しない）

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

  public async create(): Promise<void> {
    console.log('[MeetingScene] create() called')
    await super.create()
    console.log('[MeetingScene] super.create() finished')
    // super.create()後に確実にテキストを表示
    this.showGameModeOffText()
    console.log('[MeetingScene] showGameModeOffText() called')
  }

  private showGameModeOffText(): void {
    console.log('[MeetingScene] Creating text...')
    const { width, height } = this.scale.gameSize
    console.log(`[MeetingScene] Game size: ${width} x ${height}`)
    const text = this.add.text(width / 2, height / 2, 'ゲームモードOFF', {
      fontSize: '48px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 20, y: 10 },
    })
    text.setOrigin(0.5)
    text.setScrollFactor(0)
    text.setDepth(1000)
    console.log('[MeetingScene] Text created:', text.x, text.y, text.visible, text.alpha)
  }
}
