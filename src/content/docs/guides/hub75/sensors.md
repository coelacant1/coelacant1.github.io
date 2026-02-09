---
title: Sensors and Peripherals
description: Guide to sensors, peripherals, and general recommendations for the HUB75 Protogen Kit
---

## Boop Sensor (APDS-9960)

The APDS-9960 is a Time-of-Flight sensor that uses an IR light to measure the distance to the object in front of it using the I2C communication protocol. This can be connected on either the Teensy I2C breakout or the ESP32 I2C breakout. Place the sensor centrally at the top of the visor for best results.

## MAX9814 Microphone

The MAX9814 electret microphone is a standard electret microphone with automatic gain compensation via an amplifier. This will pick up a varying range of sounds and not just your voice, so it is best to tune the software gain appropriately.

## Control Button

The control button is a simple button that allows you to toggle between faces. There is no analog filtering on the button with the kit as the button debouncing is handled in code within the ButtonHandler class.

## MPU6050

The MPU6050 is a motion processing unit that allows for reading from a 3-axis accelerometer and a 3-axis gyroscope. These inputs can be read in over I2C with either the Teensy or the ESP32 and be used to map and give more motion to the face.

## I2C OLED Display

The OLED display is a small display for mounting within the visor for the wearer to see, it is used to display the current face being displayed on the outside, status of a battery, or anything else you like. This will communicate over I2C with either the Teensy or the ESP32.

## Programming the Teensy

:::tip[ProtoTracer Documentation]
For complete programming instructions and getting started with ProtoTracer, please refer to the [ProtoTracer Documentation](/software/prototracer/).

The ProtoTracer software provides a comprehensive framework for creating animated Protogen faces with the HUB75 kit.
:::

## General Recommendations and Notes

:::caution[Power Safety]
- Do not use external power to the XT30 connector unless it is 5V directly. The controller should be able to handle 4.5V to 5.5V but anything else is outside of specification.
- Do not short circuit the IO pins. Be careful about which pins are in use and are listed at the beginning of the guide.
:::

:::warning[Environmental Care]
Be careful leaving the electronics in a humid environment.
:::

:::note[Repairs]
If you have a faulty device, please contact me before attempting repairs. Repairs are easy with the proper equipment but without this equipment you could cause more damage.
:::
