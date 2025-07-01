# Pulse Pivot Matrix (PPM) Indicator
5 EMA Ribbon system designed for trend analysis and support/resistance identification on both ThinkorSwim and TradingView platforms.

## Overview

The Pulse Pivot Matrix is an advanced technical indicator that combines multiple Exponential Moving Averages (EMAs) with dynamic color coding, conviction signals, and bias analysis to provide comprehensive trend analysis for traders.

## Bearish Case

![Pulse Pivot Matrix Indicator in Action](https://github.com/user-attachments/assets/237f1db7-c7f8-43ce-94c6-f3fb9cfa247e)

*The Pulse Pivot Matrix indicator displaying the 5 EMA ribbon system with dynamic color coding, conviction arrows, and bias analysis on a live chart.*

## Features

### Core Components

This trading system uses a 5 EMA Ribbon System with 8, 13, 21, 48, and 200-period EMAs, which you can adjust as needed. It features dynamic color coding: white and light pink for bullish trends, red and pink for bearish ones. The ribbon folding visual creates a cloud between EMAs to highlight crossovers. Conviction arrows signal high-probability trades based on the 13/48 EMA crossover. The system includes biased EMAs—the 21 EMA tracks crosses with the 8 EMA, and the 200 EMA monitors the 21 EMA. Bias candles are color-coded based on the bias EMA, and the 13 EMA pullback zone marks entry or hold opportunities. Visually, you get a trend status display for real-time trend updates, support/resistance levels derived from EMA confluence, an EMA values table showing current EMA figures, and a thorough alert system for key signals.

## Installation

### ThinkorSwim Installation

1. Open ThinkorSwim platform
2. Go to `Studies` → `Edit Studies` → `thinkScript Editor`
3. Copy the contents of `pulse-pivot-matrix-thinkorswim.tos`
4. Paste into the editor
5. Save as "Pulse Pivot Matrix"
6. Apply to your chart

### TradingView Installation

1. Open TradingView platform
2. Click on `Pine Editor` (at the bottom of the screen)
3. Copy the contents of `pulse-pivot-matrix-tradingview.pine`
4. Paste into the editor
5. Click `Save` and give it a name
6. Click `Add to Chart`

## How to Use

### Trend Identification

- **Bullish Trend**: All EMAs aligned in ascending order (8>13>21>48)
- **Bearish Trend**: All EMAs aligned in descending order (8<13<21<48)
- **Neutral**: Mixed EMA alignment

### Entry Signals

1. **Conviction Arrows**: 
   - Green triangle up: 13 EMA crosses above 48 EMA (Bullish)
   - Red triangle down: 13 EMA crosses below 48 EMA (Bearish)

2. **Pullback Zones**: 
   - Use 13 EMA pullback zone for entries in trending markets
   - Look for price to touch and bounce from the zone

3. **Ribbon Compression**: 
   - When EMAs converge, expect a breakout
   - Direction determined by subsequent ribbon expansion

## Disclaimer

This indicator is for educational and informational purposes only. It should not be considered as financial advice. Always conduct your own research and consider consulting with a financial advisor before making trading decisions. Past performance does not guarantee future results.
