---
title: Wiring
description: Connector pinouts and general recommendations for the Protocontroller V2
---

## Top Connector Pinout

![Top Connector Pinout](/images/guides/protocontroller-v2/img-011.png)

## Bottom Connector Pinout

![Bottom Connector Pinout](/images/guides/protocontroller-v2/img-012.png)

## Programming

:::note
For detailed programming instructions, please refer to the [ProtoTracer documentation](/software/prototracer/). The ProtoTracer documentation covers:

- Visual Studio Code and PlatformIO setup
- Downloading and configuring ProtoTracer
- WS35 LED Panel configuration
- HUB75 LED Panel configuration
- Uploading firmware to the Teensy 4.0
:::

## General Recommendations and Notes

### Power Supply Requirements

- Ensure that the XT30 connector is supplied with **5V directly**
- The controller operates within a voltage range of **4.5V to 5.5V**
- Any voltage outside this range is beyond the specified limits
- The onboard voltage regulation is designed for 5V input only; other voltages require external regulation

### I/O Pin Safety

- Avoid short-circuiting the I/O pins
- Refer to the schematic section for active pin designations
- When making or modifying connections, always verify the polarity to prevent damage
- The controller has reverse voltage protection, but verifying polarity is still recommended

### Environmental Conditions

- **Operating temperature range**: 0°C to +40°C
- **Recommended temperature range**: 5°C to 30°C for reliable functioning
- Exercise caution with humidity, as it can damage the electronics
- **Maximum humidity**: 90% (non-condensing)
- The controller is **not waterproof**—any exposure to water can cause irreversible damage

### Troubleshooting

- If you encounter any issues with the controller, contact me before attempting repairs to avoid further damage
- In the event of water exposure, promptly disconnect power
