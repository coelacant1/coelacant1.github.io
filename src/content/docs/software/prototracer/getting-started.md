---
title: Getting Started
description: Hardware requirements and initial setup for ProtoTracer
---

# Getting Started with ProtoTracer

Welcome to ProtoTracer: Animation Engine! This guide will help you set up your hardware, build the code, and get started with creating and deploying animations.

---

## Overview

ProtoTracer is a 3D ray-tracing and animation engine designed to run on Teensy 4.0 and Teensy 4.1 boards. It supports a variety of hardware configurations for Protogen-style characters and pixel matrices.

---

## Hardware Requirements

To use ProtoTracer, you'll need the following hardware:

1. **Microcontroller**: Teensy 4.0 or Teensy 4.1 with a breakout for your LED boards
2. **Display Matrix**:
   - HUB75 LED Matrix (two 64x32 panels)
   - WS2812/WS2811 LED strips or panels (WS35 boards)
3. **Additional Sensors** (optional):
   - Adafruit BNO055 (IMU Sensor)
   - Adafruit APDS9960 (Gesture/Boop Sensor)
   - SSD1306 (OLED Display)
4. **Power Supply**:
   - Sufficient for the number of LEDs you plan to use
   - USB cable for programming

---

## Software Setup

### 1. Install Visual Studio Code

Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 2. Install PlatformIO

In Visual Studio Code, go to the Extensions Marketplace and search for "PlatformIO IDE". Install the PlatformIO IDE extension.

### 3. Clone the Repository

```bash
git clone https://github.com/coelacant1/ProtoTracer.git
cd ProtoTracer
```

### 4. Install Required Libraries

PlatformIO will automatically install the required libraries listed in `platformio.ini`. No manual intervention is needed.

---

## Hardware Setup

### Connect Your LEDs

- **For HUB75**: Connect the panel to the appropriate pins on the Teensy as per the [HUB75 Kit Guide](/guides/hub75/)
- **For WS2812/WS2811**: Connect the data line to the designated pins per the [WS35 Kit Guide](/guides/ws35/)

### Power Supply

- Ensure your LEDs have a sufficient and stable power supply
- Use a capacitor across the power supply to protect the LEDs and microcontroller

### Sensor Connections

Refer to the Adafruit documentation for wiring details on the BNO055, APDS9960, or other sensors.

---

## Running the Code

After uploading the code:

1. **Connect Power**: Provide power to your LED matrix or strips
2. **Observe Output**: Animations should start immediately on the display
3. **Debug**: Use the serial monitor to debug or view real-time stats if configured

---

## Troubleshooting

### Build Errors
- Ensure PlatformIO is installed and up-to-date
- Verify the correct environment is selected in `platformio.ini`

### No Output
- Check LED connections and power supply
- Ensure the correct LED type is selected in `UserConfiguration.h`

### Sensor Issues
- Verify I2C connections for sensors
- Check the serial monitor for error messages

---

## Next Steps

- [Compiling & Uploading](/software/prototracer/compiling/) - Detailed build instructions
- [Voice Calibration](/software/prototracer/voice-calibration/) - Calibrate formant detection
- [Customization](/software/prototracer/customization/) - Modify ProtoTracer for your needs
