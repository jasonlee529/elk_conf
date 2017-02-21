#!/bin/bash

xrandr --output DP1 --auto --rotate right --right-of eDP1
xrandr --output DP2 --auto --right-of DP1
xrandr --output eDP1 --off
