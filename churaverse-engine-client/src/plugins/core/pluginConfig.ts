import { IPluginConfig } from './IPluginConfig'

export let _pluginConfig: IPluginConfig = {
  plugins: {
    MainScene: [],
    TitleScene: [],
  },
}

export function pluginConfig(config: IPluginConfig): void {
  _pluginConfig = config
}
