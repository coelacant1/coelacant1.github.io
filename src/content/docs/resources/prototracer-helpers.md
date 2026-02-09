---
title: ProtoTracer Helper Tools
description: Python scripts for converting 3D models, images, and animations into ProtoTracer-compatible formats
---

# ProtoTracer Helper Tools

The [ProtoTracer-Helpers](https://github.com/coelacant1/ProtoTracer-Helpers) repository provides Python scripts that convert various file formats into ProtoTracer-compatible C++ header files.

## Available Tools

### Camera Creator

Generates C++ arrays of Vector2D pixel coordinates from CSV files.

```bash
python Camera-Creator.py input.csv output.h
```

**Input**: CSV file with pixel coordinates  
**Output**: C++ header with Vector2D array

---

### FBX Converter

Converts Autodesk FBX files to ProtoTracer 3D format with **blendshape support**.

```bash
python FBX-Converter.py model.fbx ProtoTracerModel.h
```

**Input**: `.fbx` file (Autodesk FBX format)  
**Output**: C++ header with 3D geometry and blendshapes

:::note
Use this converter if you need morph targets/blendshapes for animated faces. This is the recommended format for Protogen face animations.
:::

---

### OBJ Converter

Converts Wavefront OBJ files to ProtoTracer 3D format with **material support**.

```bash
python OBJ-Converter.py model.obj ProtoTracerModel.h
```

**Input**: `.obj` file (Wavefront OBJ format)  
**Output**: C++ header with 3D geometry and materials

:::caution
OBJ files do **not** support blendshapes. Use FBX format if you need facial animations.
:::

---

### GIF Converter

Converts animated GIFs to ProtoTracer animated material format.

```bash
python GIF-Converter.py animation.gif AnimatedMaterial.h
```

**Input**: `.gif` file (animated GIF)  
**Output**: C++ header with animated frame data

Use this for:
- Animated textures
- Looping background effects
- Simple sprite animations

---

### Image Converter

Converts static images to ProtoTracer material format.

```bash
python Image-Converter.py texture.png StaticMaterial.h
```

**Input**: Image file (`.png`, `.jpg`, `.bmp`, etc.)  
**Output**: C++ header with static material data

---

## Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/coelacant1/ProtoTracer-Helpers.git
   ```

2. **Install Python 3** if not already installed

3. **Navigate to the tool folder** you need:
   ```bash
   cd ProtoTracer-Helpers/FBX-Converter
   ```

4. **Run the converter**:
   ```bash
   python FBX-Converter.py your-model.fbx Output.h
   ```

5. **Include the generated header** in your ProtoTracer project

---

## Workflow Example

### Creating a Custom Protogen Face

1. **Model your face** in Blender with blendshapes for expressions
2. **Export as FBX** with blendshapes enabled
3. **Convert to header file**:
   ```bash
   python FBX-Converter.py MyProtogenFace.fbx MyProtogenFace.h
   ```
4. **Include in ProtoTracer** and reference in your project code

---

## License

ProtoTracer Helpers is licensed under **AGPL-3.0**. Modifications must be shared publicly if distributed.

[View Repository](https://github.com/coelacant1/ProtoTracer-Helpers)

:::tip[Related]
See the [ProtoTracer Documentation](https://coelacant.com/ProtoTracer/) for complete software setup instructions.
:::
