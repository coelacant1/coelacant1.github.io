---
title: Customization
description: Modifying and customizing ProtoTracer for your project
---

# Modifying and Customizing ProtoTracer

ProtoTracer is designed to be flexible and extensible. This guide provides an overview of key customization options.

---

## Asset Converters

ProtoTracer includes helper tools for converting assets. See [ProtoTracer Helpers](/resources/prototracer-helpers/) for the full toolset.

### GIF to AnimatedMaterial

Convert GIFs into animated materials for dynamic visuals:
- Adjust frame rates and resolutions for optimal performance
- Integrate the material into your project

### OBJ to ProtoTracer 3D Format

Bring 3D models to life by converting `.OBJ` files:
- Prepare models for conversion
- Optimize for real-time performance

### FBX to ProtoTracer 3D Format

Convert `.FBX` files while retaining blendshapes:
- Import complex animations
- Troubleshoot common conversion issues

---

## Advanced Customizations

### Modify Core Functionality

- Explore the codebase to understand ProtoTracer's modular structure
- Extend or override classes in key modules:
  - **Animation**: Timing and blendshape control
  - **Renderer**: Rasterization and display output
  - **Physics**: Physics simulation for animations
- Leverage `platformio.ini` for custom build configurations

### Extend Project Templates

Use the provided templates under `Examples` to extend functionality:
- Copy an existing example as a starting point
- Modify `UserConfiguration.h` for your hardware setup

### Create Custom Scenes and Materials

- Use the `Scene` class to set up new environments
- Create custom materials, including static and animated textures
- Implement new animation controllers

---

## UserConfiguration.h

The main customization file is located in the `Examples` directory. Key settings include:

```cpp
// LED Configuration
#define LED_COUNT 500
#define LED_TYPE WS2812B

// Sensor Enables
#define ENABLE_BOOP_SENSOR true
#define ENABLE_MICROPHONE true
#define ENABLE_GYROSCOPE false

// Animation Settings
#define DEFAULT_BRIGHTNESS 128
#define ANIMATION_FPS 60
```

---

## Contributing

If you've made a valuable customization or tool, consider sharing it:

1. Fork the repository on GitHub
2. Commit your changes with a descriptive message
3. Submit a pull request
4. Add documentation for your feature

---

## Support

For questions, feature requests, or troubleshooting:

- [GitHub Discussions](https://github.com/coelacant1/ProtoTracer/discussions)
- [Discord Server](https://discord.gg/YwaWnhJ)
