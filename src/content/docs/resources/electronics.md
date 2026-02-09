---
title: Protogen Electronics
description: Open-source PCB designs, schematics, and fabrication files for Protogen controllers
---

# Protogen Electronics

The [Protogen-Electronics](https://github.com/coelacant1/Protogen-Electronics) repository contains all the open-source PCB designs, schematics, and fabrication files for building Protogen controller boards.

## Available Designs

### Protocontroller V1 (WS35 Kit)

The Protocontroller V1 is designed for WS2812-based Protogen builds with the following features:

- **WS2812 Support**: Control up to 8 LED strips with 500 pixels each
- **ESP32 WROVER**: Integrated Bluetooth/WiFi for wireless communication
- **Teensy 4.0**: Main processing unit for driving the LED animations
- **I2C/SPI Breakouts**: Connections for sensors and peripherals on both microcontrollers
- **USB Programming**: Integrated CP2104 FTDI for ESP32 programming

**Included Files:**
- Gerber files for PCB fabrication
- STL files for enclosure
- Bill of materials

[View Protocontroller V1 on GitHub](https://github.com/coelacant1/Protogen-Electronics/tree/main/ProtogenControllerV1)

:::tip[Related Documentation]
See the [WS35 Kit Guide](/guides/ws35/) for complete wiring and setup instructions.
:::

---

### SmartMatrix Protogen Shield (HUB75 Kit)

The SmartMatrix Protogen Shield is a breakout board designed to work with the SmartLED Shield for Teensy 4:

- **SmartLED Shield Compatible**: Works with the PixelMatix SmartLED Shield for HUB75 panels
- **Sensor Connectivity**: Multiple I2C headers for sensors
- **Power Distribution**: XT30 connectors for power input/output
- **Power Indicators**: LED indicators for 3.3V and 5V rails

**Included Files:**
- KiCAD project files
- Gerber files for PCB fabrication
- Bill of materials

[View SmartMatrix Shield on GitHub](https://github.com/coelacant1/Protogen-Electronics/tree/main/SmartMatrixProtogenShield)

:::tip[Related Documentation]
See the [HUB75 Kit Guide](/guides/hub75/) for complete wiring and setup instructions.
:::

---

## Fabrication Tips

### Ordering PCBs

1. Download the Gerber files from the repository
2. Upload to your preferred PCB manufacturer (JLCPCB, PCBWay, OSHPark, etc.)
3. Use the following recommended settings:
   - **Layers**: 4-layer for Protocontroller V1, 2-layer for SmartMatrix Shield
   - **Thickness**: 1.6mm standard
   - **Surface Finish**: HASL or ENIG

### Assembly

The repositories include complete bills of materials (BOM) with part numbers and footprints. Most components are standard SMD parts available from DigiKey, Mouser, or LCSC.

---

## License

These electronics designs are licensed under the **GNU General Public License v3.0**. This means:

- You can use, modify, and manufacture these designs
- Modified versions must be shared under the same license
- Commercial use is allowed with proper attribution

[View Full Repository](https://github.com/coelacant1/Protogen-Electronics)
