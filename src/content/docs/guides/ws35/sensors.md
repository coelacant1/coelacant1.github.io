---
title: Sensors and Peripherals
description: Boop sensor, microphone, control button, MPU6050, OLED display, programming links, and general recommendations
---

# Sensors and Peripherals

## Boop Sensor (APDS-9960)

The APDS-9960 is a Time of Flight sensor that uses an IR light to measure the distance to the object in front of it using the I2C communication protocol. This can be connected on either the Teensy I2C breakout or the ESP32 I2C breakout. Place the sensor centrally at the top of the visor for best results.

## MAX9814 Microphone

The MAX9814 electret microphone is a standard electret microphone with automatic gain compensation via an amplifier. This will pick up a varying range of sounds and not just your voice, so it is best to tune the software gain appropriately.

## Control Button

The control button is a simple button that allows you to toggle between faces. There is no analog filtering on the button with the kit as the button debouncing is handled in code within the ButtonHandler class.

## MPU6050

The MPU6050 is a motion processing unit that allows for reading from a 3-axis accelerometer and a 3-axis gyroscope. These inputs can be read in over I2C with either the Teensy or the ESP32 and be used to map and give more motion to the face.

## I2C OLED Display

The OLED display is a small display for mounting within the visor for the wearer to see. It is used to display the current face being displayed on the outside, status of a battery, or anything else you like. This will communicate over I2C with either the Teensy or the ESP32.

---

## Programming

### Programming the Teensy

For complete instructions on programming the Teensy with ProtoTracer, please refer to the [ProtoTracer documentation](/software/prototracer/).

ProtoTracer is the recommended software for controlling your Protogen face. It will ray trace a live 3D model of a Protogen face to the LED panel in real time.

### Programming the ESP32

For complete instructions on programming the ESP32, please refer to the [ProtoTracer documentation](/software/prototracer/).

The ESP32 handles sensor reading and communication with the Teensy for a complete Protogen control system.

---

## General Recommendations and Notes

:::caution[Important Safety Information]
Please read and follow these recommendations carefully to ensure the longevity of your kit.
:::

### Power Guidelines

- **Do not use external power to the XT30 connector unless it is 5V directly.** The controller should be able to handle 4.5V to 5.5V but anything else is outside of specification.

### Physical Handling

- **Do not drop the LED panels.** They should be able to handle a reasonable amount of wear-and-tear but only within reason.
- **Do not short circuit the IO pins.** Be careful about which pins are in use and are listed at the beginning of the guide.

### Assembly Notes

- **Keep the Kapton tape between the split panel edges.** This ensures that the power planes do not touch and short out. There should be a reasonable gap without this tape, but it is there as a safety measure.
- **Ensure correct polarity when re-soldering.** If you de-solder the connections going to the LED boards, ensure that the polarity is correct. The LEDs have reverse voltage protection, but it is best not to test it!

### Operating Conditions

- **Temperature range:** The LED boards are only meant for use between -25°C and +85°C, but the recommended range would be 5°C to 30°C for tested operation.
- **Humidity:** Be careful leaving the electronics in a humid environment.

### Water Damage

- **If your electronics get submerged in water, disconnect power as soon as possible.** The LED boards should not be damaged but will draw excess current from the rest of your circuit. The LED boards have been tested submerged entirely under water without issue, but do not rely on this. The controllers and sensors will be damaged by water.

### Repairs

- **Contact support before attempting repairs.** If you have a faulty LED board, please contact me before attempting repairs. The LEDs are easy to replace with the proper equipment, but without this equipment you could cause more damage.
