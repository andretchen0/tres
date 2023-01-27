# Sphere

![](/cientos/sphere.png)

The `cientos` package provides a `<Sphere />` component that serves as a short-cut for a `SphereGeometry` and a `MeshBasicMaterial` with a `Mesh` object.

## Usage

```html
<Sphere :args="[1, 1, 1]" color="pink" />

// Sphere with a custom material transformations
<Sphere ref="planeRef" :args="[1, 1, 1]" :position="[2, 4, 0]">
  <TresMeshToonMaterial color="pink" />
</Sphere>
```

