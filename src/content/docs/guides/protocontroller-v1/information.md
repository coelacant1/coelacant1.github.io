---
title: Information
description: Pinout, power setup, and programming for the Protocontroller V1.1
---

# Protocontroller V1.1 Information

## Pinout

![Protocontroller V1.1 Pinout](/images/guides/ws35/img-005.png)

---

## Power Setup

The full controller can be powered 3 different ways, two of which should be done, one should be prevented.

### Powering the ESP32 for Programming

The ESP32 can be connected directly with the onboard USB Micro port, no changes need to be made to use it. It can be plugged in and programmed as-is.

### Powering the Teensy 4.0 for Programming

For programming the Teensy 4.0, the bottom VIN from VUSB trace needs to be cut as to not provide power to the LED boards and cause damage while programming.

![Teensy Programming Power Setup](/images/guides/ws35/img-023.png)

### Powering the Controller for Usage

To use the controller, 5V must be provided to the XT30 connector. Make sure you follow the standards for the XT30 polarity!

![Controller Power Usage](/images/guides/ws35/img-024.png)

---

## Programming

For detailed programming instructions, please refer to the [ProtoTracer documentation](/software/prototracer/). The ProtoTracer documentation covers:

- Visual Studio Code and PlatformIO setup
- Downloading and configuring ProtoTracer
- WS35 LED Panel configuration
- Uploading firmware to the Teensy 4.0
