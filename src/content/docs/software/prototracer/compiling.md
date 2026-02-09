---
title: Compiling & Uploading
description: Build and upload ProtoTracer with PlatformIO
---

# Compiling and Uploading ProtoTracer

This guide walks you through the process of compiling and uploading ProtoTracer using PlatformIO.

---

## Prerequisites

1. **Visual Studio Code**: [Download](https://code.visualstudio.com/)
2. **PlatformIO IDE**: Install from the VS Code Extensions Marketplace
3. **Clone the Repository**: 
   ```bash
   git clone https://github.com/coelacant1/ProtoTracer.git
   ```

---

## Supported Environments

The project supports multiple Teensy 4.0 and Teensy 4.1 configurations:

### Teensy 4.0
| Environment | Description |
|-------------|-------------|
| `teensy40hub75` | HUB75 LED panels |
| `teensy40ws35` | WS35 LED boards |
| `teensy40beta` | Beta Protogen configuration |
| `teensy40verifyrender` | Render verification |
| `teensy40verifyhardware` | Hardware verification |

### Teensy 4.1
| Environment | Description |
|-------------|-------------|
| `teensy41hub75` | HUB75 LED panels |
| `teensy41ws35` | WS35 LED boards |
| `teensy41beta` | Beta Protogen configuration |
| `teensy41verifyrender` | Render verification |
| `teensy41verifyhardware` | Hardware verification |

---

## Compile and Upload Instructions

### 1. Open the Project in PlatformIO

Launch Visual Studio Code and use `File > Open Workspace` to open the workspace file in the root directory of the project.

### 2. Select the Environment

In the `platformio.ini` file, each environment corresponds to a specific Teensy and Protogen configuration.

Click on the PlatformIO logo on the left of VS Code, or run:

```bash
pio run -e <environment_name>
```

Replace `<environment_name>` with your target (e.g., `teensy40hub75`).

### 3. Modify UserConfiguration.h (if necessary)

Located in the `Examples` directory, this file allows you to customize settings such as:
- LED count and type
- Sensor enable/disable
- Animation preferences

### 4. Build the Project

Click the **PlatformIO Build** button or use:

```bash
pio run
```

### 5. Upload the Code

Connect your Teensy board via USB, then click **PlatformIO Upload** or use:

```bash
pio run -t upload -e <environment_name>
```

### 6. Monitor Serial Output (Optional)

Open the serial monitor to view debugging information:

```bash
pio device monitor
```

---

## Library Dependencies

The following libraries are automatically managed by PlatformIO:

- ProtoTracer
- SPI
- Wire
- EEPROM
- Adafruit Unified Sensor
- OctoWS2811
- Adafruit BNO055
- SerialTransfer
- Adafruit APDS9960 Library
- SmartMatrix
- Adafruit BusIO
- Teensy_ADC
- Adafruit SSD1306
- Adafruit seesaw Library
- Adafruit MMC56x3

---

## Troubleshooting

### Missing Dependencies
PlatformIO will attempt to download libraries automatically. Ensure you're connected to the internet during the first build.

### Upload Errors
- Verify the correct Teensy board is selected
- Check that the board is properly connected
- Try pressing the reset button on the Teensy

### Serial Monitor Issues
Ensure the correct COM port is selected in PlatformIO settings.

---

## Additional Notes

- By default, the output directory is structured under `.pio/`
- To add custom functionality, modify the configuration in `platformio.ini` and project files

For further assistance:
- [PlatformIO Documentation](https://docs.platformio.org/)
- [Teensy PJRC Documentation](https://www.pjrc.com/teensy/)
