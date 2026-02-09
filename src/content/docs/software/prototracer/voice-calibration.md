---
title: Voice Calibration
description: Calibrating the formant frequency map for viseme detection
---

# Voice Calibration

This guide walks you through calibrating the formant frequency map in `FFTVoiceDetection.h` for accurate viseme (mouth shape) detection.

---

## What Are Formants?

Formants are resonant frequencies of the vocal tract that define the characteristics of vowel sounds. In ProtoTracer:

- **F1** corresponds to the height of the tongue
- **F2** corresponds to the position of the tongue

Each viseme has a pair of F1 and F2 frequencies that define its position in the frequency space.

---

## Prerequisites

### 1. Spectrum Analyzer

Install a spectrum analyzer app on your phone or computer:
- [Spectroid](https://play.google.com/store/apps/details?id=org.intoorbit.spectrum) (Android)
- [Room EQ Wizard](https://www.roomeqwizard.com/) (Desktop)

### 2. Microphone Setup

- Use a high-quality microphone in a quiet environment
- Ensure consistent distance and orientation between the microphone and speaker

### 3. Sound Samples

Prepare to produce these vowel sounds during calibration:
- `EE` (as in "see")
- `AE` (as in "cat")
- `UH` (as in "but")
- `AR` (as in "car")
- `ER` (as in "her")
- `AH` (as in "father")
- `OO` (as in "boot")

---

## Calibration Process

### Step 1: Gather Formant Data

1. **Open the Spectrum Analyzer**
   - Configure to display frequency peaks
   - Set frequency range to 0–4000 Hz

2. **Produce Each Sound**
   - Speak each vowel sound
   - Record the **first peak (F1)** and **second peak (F2)** frequencies

   Example: For `EE`, F1 might be **350 Hz** and F2 might be **3200 Hz**

3. **Repeat for Accuracy**
   - Repeat each sound several times to average the observed F1 and F2 values

---

### Step 2: Update FFTVoiceDetection.h

1. **Locate the Coordinates**

   In `FFTVoiceDetection.h`, find the `Vector2D` definitions for each viseme:

   ```cpp
   // Original formant map
   Vector2D visEE = Vector2D(350.0f, 3200.0f);  ///< Coordinates for "EE"
   Vector2D visAE = Vector2D(500.0f, 2700.0f);  ///< Coordinates for "AE"
   Vector2D visUH = Vector2D(1100.0f, 2700.0f); ///< Coordinates for "UH"
   Vector2D visAR = Vector2D(850.0f, 850.0f);   ///< Coordinates for "AR"
   Vector2D visER = Vector2D(1000.0f, 1000.0f); ///< Coordinates for "ER"
   Vector2D visAH = Vector2D(900.0f, 2400.0f);  ///< Coordinates for "AH"
   Vector2D visOO = Vector2D(600.0f, 600.0f);   ///< Coordinates for "OO"
   ```

2. **Update the Values**

   Replace with your calibrated averages:

   ```cpp
   // Updated formant map
   Vector2D visEE = Vector2D(360.0f, 3150.0f);  ///< Updated for "EE"
   Vector2D visAE = Vector2D(510.0f, 2650.0f);  ///< Updated for "AE"
   Vector2D visUH = Vector2D(1120.0f, 2750.0f); ///< Updated for "UH"
   // ... continue for all visemes
   ```

3. **Save the File**

---

### Step 3: Verify Calibration

1. **Compile and Upload**
   
   Recompile and upload to your Teensy using [PlatformIO](/software/prototracer/compiling/)

2. **Test Sounds**
   
   Produce each vowel sound and check the corresponding viseme probabilities using the `PrintVisemes` method:

   ```cpp
   // Serial output format from PrintVisemes:
   // <f1>,<f2>,<viseme_label>
   // Example: 350.0,3200.0,EE
   ```

3. **Adjust Threshold (Optional)**
   
   If probabilities don't align as expected, tweak the threshold value:

   ```cpp
   float threshold = 400.0f; ///< Adjust as needed
   ```

---

## Troubleshooting

### Inconsistent Probabilities
- Ensure the microphone captures clear audio
- Verify F1 and F2 frequencies during calibration

### Low Probabilities
- Increase the `threshold` value slightly
- Check `peakDetection` parameters for sensitivity:

  ```cpp
  PeakDetection<peakCount> peakDetection = PeakDetection<peakCount>(8, 2.0f, 0.5f);
  ```

### Overlap Between Visemes
- Adjust coordinates for closer alignment with actual formant frequencies

---

By following these steps, you can ensure accurate calibration of the formant frequency map for reliable viseme detection in your Protogen.
