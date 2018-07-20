#!/bin/sh

filename='lecture.txt'

while read p; do
  read -p "$p..." input </dev/tty
  say $p
done < $filename
