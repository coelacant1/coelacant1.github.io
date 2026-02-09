---
title: KB WS35 LED Panels
description: LED panel information, pin assignments, and diagrams for top-side and bottom-side panels
---

# KB WS35 LED Panels

## General Information

These LED boards use WS2812B-Mini serialized LEDs, these are glorified LED strips and can be controlled with the same controller! Each board has 571 LEDs which need to be controlled. This can be done through several means; I would recommend using my ProtoTracer program which will ray trace a live 3D model of a Protogen face to the LED panel in real time!

An alternative is to use FastLED with Arduino and manually define the pixels in order. To increase the framerate the boards can be split in two with the perforation in the middle.

## Top-Side LED Panel

As stated before, these panels are essentially LED strips. The order of the LEDs follows the pattern as below:

![Top-Side LED Panel Diagram](/images/guides/ws35/img-003.png)

**Pin Assignments:**
- Data In
- Data Out Split
- Data In Split
- Data Out

## Bottom-Side LED Panel

![Bottom-Side LED Panel Diagram](/images/guides/ws35/img-004.png)

**Pin Assignments:**
- Data In Split
- Data Out
- Data In
- Data Out Split
