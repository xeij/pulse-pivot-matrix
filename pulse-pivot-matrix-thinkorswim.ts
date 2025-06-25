# Pulse Pivot Matrix - ThinkorSwim ThinkScript
# 5 EMA Ribbon System with Advanced Visual Features
# Created for trend analysis and support/resistance identification

declare upper;

# Input Parameters
input ema1_period = 8;
input ema2_period = 13;
input ema3_period = 21;
input ema4_period = 48;
input ema5_period = 200;

input show_conviction_arrows = yes;
input show_bias_candles = yes;
input bias_ema_period = 21; # EMA period for bias candle coloring

# EMA Calculations
def ema1 = ExpAverage(close, ema1_period);
def ema2 = ExpAverage(close, ema2_period);
def ema3 = ExpAverage(close, ema3_period);
def ema4 = ExpAverage(close, ema4_period);
def ema5 = ExpAverage(close, ema5_period);

# Bias EMA for candle coloring
def bias_ema = ExpAverage(close, bias_ema_period);

# Trend Direction Logic
def bullish_trend = ema1 > ema2 and ema2 > ema3 and ema3 > ema4;
def bearish_trend = ema1 < ema2 and ema2 < ema3 and ema3 < ema4;

# EMA Crossover Detection
def ema13_48_bullish_cross = ema2 crosses above ema4;
def ema13_48_bearish_cross = ema2 crosses below ema4;
def ema8_21_bullish_cross = ema1 crosses above ema3;
def ema8_21_bearish_cross = ema1 crosses below ema3;
def ema21_200_bullish_cross = ema3 crosses above ema5;
def ema21_200_bearish_cross = ema3 crosses below ema5;

# Color Definitions
DefineGlobalColor("bullish_primary", Color.GREEN);
DefineGlobalColor("bullish_secondary", Color.BLUE);
DefineGlobalColor("bearish_primary", Color.RED);
DefineGlobalColor("bearish_secondary", Color.ORANGE);
DefineGlobalColor("neutral", Color.GRAY);

# Plot EMAs with Dynamic Colors
plot EMA8 = ema1;
plot EMA13 = ema2;
plot EMA21 = ema3;
plot EMA48 = ema4;
plot EMA200 = ema5;

# EMA8 (Primary Trend Line)
EMA8.SetDefaultColor(if bullish_trend then GlobalColor("bullish_primary") else if bearish_trend then GlobalColor("bearish_primary") else GlobalColor("neutral"));
EMA8.SetLineWeight(2);

# EMA13 (Secondary Trend Line)
EMA13.SetDefaultColor(if bullish_trend then GlobalColor("bullish_secondary") else if bearish_trend then GlobalColor("bearish_secondary") else GlobalColor("neutral"));
EMA13.SetLineWeight(2);

# Biased 21 EMA (against 8 EMA cross)
EMA21.SetDefaultColor(if ema1 > ema3 then GlobalColor("bullish_primary") else GlobalColor("bearish_primary"));
EMA21.SetLineWeight(3);

# EMA48 (Support/Resistance)
EMA48.SetDefaultColor(if bullish_trend then GlobalColor("bullish_secondary") else if bearish_trend then GlobalColor("bearish_secondary") else GlobalColor("neutral"));
EMA48.SetLineWeight(2);

# Biased 200 EMA (against 21 EMA cross)
EMA200.SetDefaultColor(if ema3 > ema5 then GlobalColor("bullish_primary") else GlobalColor("bearish_primary"));
EMA200.SetLineWeight(4);

# Ribbon Folding Visual (Cloud between EMAs)
AddCloud(EMA8, EMA13, 
    if bullish_trend then GlobalColor("bullish_primary") else if bearish_trend then GlobalColor("bearish_primary") else GlobalColor("neutral"),
    if bullish_trend then GlobalColor("bullish_secondary") else if bearish_trend then GlobalColor("bearish_secondary") else GlobalColor("neutral"));

AddCloud(EMA13, EMA21,
    if bullish_trend then GlobalColor("bullish_secondary") else if bearish_trend then GlobalColor("bearish_secondary") else GlobalColor("neutral"),
    GlobalColor("neutral"));

# 13 EMA Pullback Overlap Zone
def pullback_zone_high = Max(ema2 * 1.005, ema2);
def pullback_zone_low = Min(ema2 * 0.995, ema2);

plot PullbackHigh = if bullish_trend then pullback_zone_high else Double.NaN;
plot PullbackLow = if bullish_trend then pullback_zone_low else Double.NaN;

PullbackHigh.SetDefaultColor(Color.LIGHT_GREEN);
PullbackHigh.SetStyle(Curve.POINTS);
PullbackLow.SetDefaultColor(Color.LIGHT_GREEN);
PullbackLow.SetStyle(Curve.POINTS);

# Conviction Arrows (13/48 EMA Crossover)
plot BullishArrow = if show_conviction_arrows and ema13_48_bullish_cross then low * 0.998 else Double.NaN;
plot BearishArrow = if show_conviction_arrows and ema13_48_bearish_cross then high * 1.002 else Double.NaN;

BullishArrow.SetPaintingStrategy(PaintingStrategy.ARROW_UP);
BullishArrow.SetDefaultColor(GlobalColor("bullish_primary"));
BullishArrow.SetLineWeight(3);

BearishArrow.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN);
BearishArrow.SetDefaultColor(GlobalColor("bearish_primary"));
BearishArrow.SetLineWeight(3);

# Bias Candles
AssignPriceColor(if !show_bias_candles then Color.CURRENT else
    if close > bias_ema then GlobalColor("bullish_primary") else GlobalColor("bearish_primary"));

# Support/Resistance Levels based on EMA confluence
def support_level = if bullish_trend then Min(ema3, ema4) else Double.NaN;
def resistance_level = if bearish_trend then Max(ema3, ema4) else Double.NaN;

plot Support = support_level;
plot Resistance = resistance_level;

Support.SetDefaultColor(GlobalColor("bullish_secondary"));
Support.SetStyle(Curve.LONG_DASH);
Support.SetLineWeight(2);

Resistance.SetDefaultColor(GlobalColor("bearish_secondary"));
Resistance.SetStyle(Curve.LONG_DASH);
Resistance.SetLineWeight(2);

# Labels for current trend status
AddLabel(yes, 
    if bullish_trend then "BULLISH TREND" 
    else if bearish_trend then "BEARISH TREND" 
    else "NEUTRAL", 
    if bullish_trend then GlobalColor("bullish_primary") 
    else if bearish_trend then GlobalColor("bearish_primary") 
    else GlobalColor("neutral"));

# EMA Values Label
AddLabel(yes, "8:" + Round(ema1, 2) + " 13:" + Round(ema2, 2) + " 21:" + Round(ema3, 2) + " 48:" + Round(ema4, 2) + " 200:" + Round(ema5, 2), Color.WHITE); 