---
title: Protocontroller V1.1
description: Pinout, schematic, physical design, header pinouts, indicators, and power setup for the Protocontroller V1.1
---

# Protocontroller V1.1

## Pinout

![Protocontroller V1.1 Pinout](/images/guides/ws35/img-005.png)

## Schematic

![Protocontroller V1.1 Schematic](/images/guides/ws35/img-006.png)

## Physical Design

### Top View

![Top View PCB](/images/guides/ws35/img-007.png)

### Bottom View

![Bottom View PCB](/images/guides/ws35/img-008.png)

### Isolated Top Layer View

![Isolated Top Layer](/images/guides/ws35/img-009.png)

### Isolated Signal Layer 1 View

![Isolated Signal Layer 1](/images/guides/ws35/img-010.png)

### Isolated Signal Layer 2 View

![Isolated Signal Layer 2](/images/guides/ws35/img-011.png)

### Isolated Bottom Layer View

![Isolated Bottom Layer](/images/guides/ws35/img-012.png)

### Isolated Top Layer Overlay

![Isolated Top Layer Overlay](/images/guides/ws35/img-013.png)

### Isolated Bottom Layer Overlay (Flipped)

![Isolated Bottom Layer Overlay](/images/guides/ws35/img-014.png)

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
