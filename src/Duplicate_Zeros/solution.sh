#!/usr/bin/env bash

duplicateZeros() {
    local arr=("$@")
    local len=${#arr[@]}

    local i=0
    while ((i < len)); do
        if [[ ${arr[$i]} -eq 0 ]]; then
            for ((j = len - 1; j > i; j--)); do
                arr[$j]=${arr[$((j - 1))]}
            done
            ((i++))
        fi
        ((i++))
    done
}

# echo "$(duplicateZeros 1 0 2 3 0 4 5 0)"
# echo "$(duplicateZeros 1 2 3)"
