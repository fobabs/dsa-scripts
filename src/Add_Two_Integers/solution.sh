#!/bin/bash

sum() {
    local num1=$1
    local num2=$2

    local sum=$((num1 + num2))

    echo $sum
}

# echo "$(sum 12 5)"
# echo "$(sum 10 4)"
