import { ACESFilmicToneMapping, PCFSoftShadowMap, sRGBEncoding } from 'three'

export const rendererPresets = {
  realistic: {
    outputEncoding: sRGBEncoding,
    toneMapping: ACESFilmicToneMapping,
    toneMappingExposure: 3,
    shadowMap: {
      enabled: true,
      type: PCFSoftShadowMap,
    },
  },
}

export type RendererPresetsType = keyof typeof rendererPresets