#!/bin/bash

checkIfExist() {
    local arr=("$@")
    local len=${#arr[@]}

    for ((i = 0; i < len; i++)); do
        for ((j = 0; j < len; j++)); do
            if [[ $i -ne $j && ${arr[$i]} -eq $((2 * ${arr[$j]})) ]]; then
                echo "true"
                return
            fi
        done
    done

    echo "false"
}

# echo "$(checkIfExist 10 2 5 3)"
# echo "$(checkIfExist 3 1 7 1)"
