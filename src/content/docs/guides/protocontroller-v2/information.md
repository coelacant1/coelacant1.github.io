---
title: Information
description: Overview, features, and limitations of the Protocontroller V2 LED controller board
---

## Overview

The Protocontroller V2 operates with the ProtoTracer codebase, which harnesses the SmartMatrix Shield Libraries and OctoWS2811 libraries for LED control. ProtoTracer 3D renders FBX files in real-time. The controller is equipped with I2C connections for sensor integration, a UART port designed for ESP32 communication enabling wireless control, IO headers with power, and PWM fan headers for thermal management.

This device draws inspiration from the SmartMatrix Shield for Teensy 4 and inherits its software compatibility, ensuring a broad range of existing libraries and applications can be utilized. As well as all software compatibility with the PJRC OctoWS2811 adaptor.

### Teensy 4.0 Microcontroller Core

At the core of the controller is a high-performance Teensy 4.0 board. It executes the control software for the LED panels and interfaces. Its extensive I/O capabilities and powerful processor allow for complex control schemes and rapid data handling.

### HUB75 LED Panel Interface

The HUB75 panel communication in this LED controller design draws its inspiration from the Smart LED Shield for Teensy 4. It facilitates the connection of a Teensy 4.0 or 4.1 to drive HUB75 panels, leveraging 5V buffers on all signal lines to ensure signal integrity, crucial for panels with 1/32 scan rates that require an additional address line.

The controller utilizes nine I/O pins from the Teensy to manage the display and includes two pins specifically for APA102 LED connectivity. Power delivery to the Teensy and buffers is managed externally to avoid overloading the shield, ensuring it remains a compact yet capable platform for sophisticated LED control. Compatibility with the SmartMatrix Library is maintained, offering users the flexibility to adapt the pin assignments as needed for their projects.

### Sensor Integration via I2C

Five I2C ports with integrated pull-up resistors are provided, enabling multiple sensor connections for applications requiring environmental feedback or interactive control. Each port can handle standard I2C communication with sensors.

### Serial Communication through UART

There is a UART port with 470-ohm inline resistors for serial communication, allowing for reliable data transmission with external devices.

### Individually Addressable LEDs

In this controller design, the signal integrity for WS2812 RGB LEDs is ensured by a 74HCT245 buffer chip and 100-ohm impedance matching resistors. Unlike the OctoWS2811 Adaptor that uses CAT6 and RJ-45 connectors, this design opts for JST XH 2.54 3-pin headers for each LED connection, providing both 5V power and ground.

This alternative connector choice simplifies individual LED strip connections, offering a more modular and customizable approach to LED array assembly, while maintaining high-quality signal transmission for precise lighting control.

### Power Management

The design incorporates an XT30 input for a 5V supply and an XT30 output, also at 5V, to power external devices. Voltage regulation ensures stable operation, and protection circuitry safeguards against electrical anomalies.

### Analog and Digital I/Os

Two analog inputs and two digital I/Os are broken out with 3.3V reference and ground connections, enabling the interfacing of various sensors and peripherals.

### PWM Fan Control Headers

There are two level-shifted PWM outputs from 3.3V to 5V for standard PWM fan control, providing versatility in thermal management.

## Limitations

- The design is tailored for LED control and may not be optimal for other purposes.
- Power constraints of the AP2112K linear dropout regulator limit the number of directly connected I2C devices.
- The onboard voltage regulation is designed for 5V input only; other voltages require external regulation.
- Thermal management through PWM fan headers is limited to devices compatible with the provided voltage levels and connectors.
