# Pulse Pivot Matrix (PPM) Indicator
# Copyright (C) 2025 Shaya Arya
A sophisticated 5 EMA Ribbon system designed for trend analysis and support/resistance identification on both ThinkorSwim and TradingView platforms.

## Overview

The Pulse Pivot Matrix is an advanced technical indicator that combines multiple Exponential Moving Averages (EMAs) with dynamic color coding, conviction signals, and bias analysis to provide comprehensive trend analysis for traders.

## Features

### 🎯 Core Components

- **5 EMA Ribbon System**: 8, 13, 21, 48, 200 period EMAs (customizable)
- **Dynamic Color Coding**: 
  - Bullish trend: Green + Blue
  - Bearish trend: Red + Orange
  - Neutral: Gray
- **Ribbon Folding Visual**: Cloud fills between EMAs to show crossover relationships
- **Conviction Arrows**: Based on 13/48 EMA crossover for high-probability signals
- **Biased EMAs**: 
  - 21 EMA biased against 8 EMA cross
  - 200 EMA biased against 21 EMA cross
- **Bias Candles**: Color-coded candles relative to bias EMA
- **13 EMA Pullback Zone**: Visual overlay for entry and hold opportunities

### 📊 Visual Elements

- **Trend Status Display**: Real-time trend identification
- **Support/Resistance Levels**: Dynamic levels based on EMA confluence
- **EMA Values Table**: Current values for all EMAs
- **Alert System**: Comprehensive alerts for all major signals

## Installation

### ThinkorSwim Installation

1. Open ThinkorSwim platform
2. Go to `Studies` → `Edit Studies` → `thinkScript Editor`
3. Copy the contents of `pulse-pivot-matrix-thinkorswim.ts`
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

### Risk Management

- **Support/Resistance**: Use dynamic S/R levels for stop placement
- **Bias Candles**: Quick visual confirmation of current bias
- **EMA Cross Levels**: Use major EMA crosses as decision points

## Customization Options

### ThinkorSwim Settings
- EMA periods (8, 13, 21, 48, 200)
- Toggle conviction arrows
- Toggle bias candles
- Bias EMA period selection

### TradingView Settings
- All ThinkorSwim features plus:
- Customizable colors for all elements
- Toggle ribbon cloud display
- Toggle pullback zone display
- Comprehensive alert system

## Alert Setup (TradingView)

Available alerts include:
- Bullish/Bearish conviction signals
- Trend start notifications
- EMA crossover alerts
- Support/resistance level touches

To set up alerts:
1. Right-click on the chart
2. Select "Add Alert"
3. Choose "Pulse Pivot Matrix" as the condition
4. Select your desired alert type
5. Configure notification settings

## Trading Strategies

### Trend Following
1. Wait for conviction arrow in trend direction
2. Enter on pullback to 13 EMA zone
3. Hold until opposite conviction arrow appears

### Swing Trading
1. Identify trend direction using ribbon alignment
2. Look for EMA cross signals (8/21, 21/200)
3. Use bias candles for confirmation
4. Set stops below/above dynamic support/resistance

### Scalping
1. Use 13 EMA pullback zone for quick entries
2. Exit on ribbon color change
3. Focus on bias candle alignment

## Files Included

- `pulse-pivot-matrix.ts` - ThinkorSwim ThinkScript version
- `pulse-pivot-matrix.pine` - TradingView Pine Script version
- `README.md` - This documentation file

## Tips for Best Results

1. **Multi-Timeframe Analysis**: Use higher timeframes for trend bias, lower for entries
2. **Volume Confirmation**: Combine with volume indicators for stronger signals
3. **Market Context**: Consider overall market conditions and major S/R levels
4. **Backtesting**: Test the indicator on historical data before live trading
5. **Risk Management**: Always use proper position sizing and stop losses

## Troubleshooting

### ThinkorSwim Issues
- Ensure all syntax is correct when copying
- Check that all global colors are properly defined
- Verify input parameters are within valid ranges

### TradingView Issues
- Make sure you're using Pine Script v5
- Check for any compilation errors in the editor
- Ensure all input values are within specified ranges

## Support

For questions, suggestions, or bug reports, please create an issue in the repository or contact the developer.

## Disclaimer

This indicator is for educational and informational purposes only. It should not be considered as financial advice. Always conduct your own research and consider consulting with a financial advisor before making trading decisions. Past performance does not guarantee future results.
