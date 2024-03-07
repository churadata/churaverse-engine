import { DamageCause } from './damageCause'
import { WeaponEntity } from './weaponEntity'

/**
 * 武器によるダメージの抽象クラス
 */
export abstract class WeaponDamageCause extends DamageCause {
  public constructor(
    public readonly weaponName: string,
    public readonly weapon: WeaponEntity
  ) {
    // engine側ではDamageCauseMapに要素を定義しないためエラーとなるが、外部プラグインにより追加定義される
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    super(weaponName)
  }
}
