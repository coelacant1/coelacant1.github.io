---
title: PTX Engine
description: Next-generation C++17 math and render core for microcontrollers and desktops
---

# PTX Engine

:::caution[Work in Progress]
PTX Engine is under active development. The APIs and structure may change without notice. For production Protogen projects, continue using [ProtoTracer](/software/prototracer/).
:::

PTX Engine is the next-generation evolution of ProtoTracer - a header-first C++17 library providing a compact math, geometry, and rendering core designed to run on both microcontrollers and desktop platforms.

[View PTX Engine on GitHub](https://github.com/coelacant1/PTXEngine)

---

## Key Improvements Over ProtoTracer

| Feature | ProtoTracer | PTX Engine |
|---------|-------------|------------|
| Language Standard | C++11 | C++17 |
| Desktop Support | No | Yes |
| Header-First | No | Yes |
| Runtime Reflection | No | Yes |
| Python Bindings | No | Yes (ctypes) |
| 8-bit AVR Support | No | Yes |

---

## Supported Platforms

PTX Engine is designed for cross-platform development:

### Microcontrollers
- **32-bit Cortex-M** (STM32, Teensy)
- **ESP32** (ESP32-S3)
- **8-bit AVR** (Arduino UNO, Nano)

### Desktop
- **Linux**
- **Windows**

---

## Key Features

### Header-First Design
The entire library is usable as header files, making it easy to integrate into any project without complex build configurations.

### Runtime Reflection System
PTX Engine includes a reflection system for runtime discovery and invocation of types and members. This enables:
- Dynamic type introspection
- Runtime method invocation
- Automated serialization
- Binding generation

### Python Integration
A ctypes-based Python wrapper allows you to:
- Explore reflection metadata
- Test engine functionality from Python
- Rapid prototyping without recompiling

---

## Building the Reflect Library

The reflection system compiles into a shared library:

```bash
# From repository root
platformio run --environment nativereflectlib
```

The produced shared library will be at:
```
.pio/build/nativereflectlib/ptx_reflect.so
```

### Using the Python Wrapper

```bash
cd lib/ptx_python
PYTHONPATH=../../src python3 reflection_demo.py --lib ../../.pio/build/nativereflectlib/ptx_reflect.so
```

Or set the environment variable:
```bash
export PTX_C_API_LIB=/full/path/to/ptx_reflect.so
PYTHONPATH=../../src python3 reflection_demo.py
```

---

## Current Development Focus

The project is actively being developed with recent work focusing on:

1. **Runtime Reflection System** - Generator and build scripts for automatic registration
2. **C ABI Layer** - Stable interface for language bindings
3. **Python Wrapper** - ctypes-based exploration of reflection metadata

---

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `engine/` | Core engine code |
| `bindings/` | Language bindings |
| `scripts/` | Build and generation scripts |
| `tests/` | Unit tests |
| `src/` | Main source and entry points |

---

## Developer Notes

### Regenerating Reflection Registry

```bash
cmake --build build --target ptx_update_registry
```

This regenerates:
- Umbrella header (`generated/ptx/ptxall.hpp`)
- PTX registry cache

### Static Utility Pattern

Static utility namespaces (e.g., `ptx::Console`, `ptx::Random`, `ptx::Time`) expose a nested `Reflection` struct that forwards to their static functions. Follow this pattern for other static-only modules that need runtime access.

---

## Contributing

See `CONTRIBUTING.md` in the repository for:
- Coding style guidelines
- Platform-specific guidance
- Pull request process

---

## License

PTX Engine is released under the **AGPL-3.0** license.

---

## Related

- [ProtoTracer](/software/prototracer/) - Current stable version for Protogen projects
- [ProtoTracer Helpers](/resources/prototracer-helpers/) - Asset conversion tools
