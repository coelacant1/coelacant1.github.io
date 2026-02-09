---
title: Firmware Uploader
description: Web-based Teensy 4.0/4.1 firmware upload tool
---

# ProtoTracer Firmware Uploader

Upload ProtoTracer firmware directly to your Teensy 4.0 or 4.1 from your browser using WebHID.

:::caution[Browser Requirements]
This tool requires a browser that supports **WebHID** (Chrome, Edge, or Opera). Safari and Firefox are not supported.
:::

---

## Launch Firmware Uploader

The firmware uploader runs as a standalone page for full functionality.

<a href="/firmware-uploader" class="sl-flex" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--sl-color-accent); color: var(--sl-color-black); border-radius: 0.25rem; font-weight: 600; text-decoration: none; margin: 1rem 0;">
  Open Firmware Uploader
</a>

---

## Instructions

1. **Download firmware** - Get the latest release from GitHub (`.hex` or `.zip`)
2. **Upload file** - Select the firmware file (supports `.zip` with multiple `.hex` files)
3. **Press reset on Teensy** - The LED should turn red (bootloader mode)
4. **Click "Select Device"** - Choose your Teensy from the device list
5. **Click "Upload Firmware"** - Wait for the upload to complete

---

## Troubleshooting

### Device not appearing
- Make sure you pressed the reset button on the Teensy (LED should be red)
- Try a different USB cable or port
- Ensure no other application is using the Teensy

### Upload fails
- Check that you selected the correct firmware for your hardware
- Verify the Teensy is in bootloader mode (red LED)
- Try pressing reset again and re-selecting the device

---

## Alternative: Manual Upload

If the web uploader doesn't work for you, use [Teensy Loader](https://www.pjrc.com/teensy/loader.html) from PJRC.
