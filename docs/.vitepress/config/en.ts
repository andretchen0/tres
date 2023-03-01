import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          // This shows `/guide/index.md` page.
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Your first Scene', link: '/guide/your-first-scene' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Renderer', link: '/api/renderer' },
          {
            text: 'Instances, arguments and props',
            link: '/api/instances-arguments-and-props',
          },
          {
            text: 'Composables',
            link: '/api/composables',
          },
          {
            text: 'Events',
            link: '/api/events',
          },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Orbit Controls', link: '/examples/orbit-controls' },
          { text: 'Basic Animations', link: '/examples/basic-animations' },
          { text: 'Groups', link: '/examples/groups' },
          { text: 'Load Textures', link: '/examples/load-textures' },
          { text: 'Load Models', link: '/examples/load-models' },
          { text: 'Load Text', link: '/examples/text-3d' },
        ],
      },
      {
        text: 'Advanced',

        items: [
          { text: 'Extending', link: '/advanced/extending' },
          {
            text: 'Caveats',
            link: '/advanced/caveats',
          },
        ],
      },
      {
        text: 'Cientos 💛',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/cientos/' },
          {
            text: 'Abstractions',
            items: [
              { text: 'Text3D', link: '/cientos/abstractions/text-3d' },
              { text: 'useAnimations', link: '/cientos/abstractions/use-animations' },
              { text: 'Environment', link: '/cientos/abstractions/environment' },
              { text: 'useEnvironment', link: '/cientos/abstractions/use-environment' },
            ],
          },
          {
            text: 'Controls',
            items: [
              { text: 'OrbitControls', link: '/cientos/controls/orbit-controls' },
              { text: 'TransformControls', link: '/cientos/controls/transform-controls' },
            ],
          },
          {
            text: 'Loaders',
            items: [
              { text: 'useGLTF', link: '/cientos/loaders/use-gltf' },
              { text: 'GLTFModel', link: '/cientos/loaders/gltf-model' },
              { text: 'useFBX', link: '/cientos/loaders/use-fbx' },
              { text: 'FBXModel', link: '/cientos/loaders/fbx-model' },
            ],
          },
          {
            text: 'Shapes',
            items: [
              { text: 'Box', link: '/cientos/shapes/box' },
              { text: 'Circle', link: '/cientos/shapes/circle' },
              { text: 'Cone', link: '/cientos/shapes/cone' },
              { text: 'Dodecahedron', link: '/cientos/shapes/dodecahedron' },
              { text: 'Icosahedron', link: '/cientos/shapes/icosahedron' },
              { text: 'Octahedron', link: '/cientos/shapes/octahedron' },
              { text: 'Plane', link: '/cientos/shapes/plane' },
              { text: 'Ring', link: '/cientos/shapes/ring' },
              { text: 'Sphere', link: '/cientos/shapes/sphere' },
              { text: 'Tetrahedron', link: '/cientos/shapes/tetrahedron' },
              { text: 'Torus', link: '/cientos/shapes/torus' },
              { text: 'TorusKnot', link: '/cientos/shapes/torus-knot' },
              { text: 'Tube', link: '/cientos/shapes/tube' },
            ],
          },
          {
            text: 'Misc',
            items: [{ text: 'useTweakpane', link: '/cientos/misc/use-tweakpane' }],
          },
        ],
      },
    ],
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/renderer' },
      /*       { text: 'API', link: '/api/' },
      { text: 'Config', link: '/config/' }, */
      /*  {
        text: 'Ecosystem',
        activeMatch: `^/ecosystem/`,
        items: [
          {
            text: `Core v${version}`,
            items: [
              {
                text: 'Release Notes ',
                link: `https://github.com/Tresjs/tres/releases/tag/%40tresjs%2Fcore%40${version}`,
              },
            ],
          },
          {
            text: `Cientos v${cientosVersion}`,
            items: [
              {
                text: 'Release Notes ',
                link: `https://github.com/Tresjs/tres/releases/tag/%40tresjs%2Fcientos%40${cientosVersion}`,
              },
            ],
          },
        ],
      }, */
    ],
  },
}