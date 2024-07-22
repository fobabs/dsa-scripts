#!/usr/bin/env bash

findDisappearedNumbers() {
    local nums=("$@")
    local n=${#nums[@]}
    local result=()

    # Create an array to mark the presence of numbers
    local -a present
    for ((i = 1; i <= n; i++)); do
        present[$i]=0
    done

    # Mark the numbers that are present in the input array
    for num in "${nums[@]}"; do
        present[$num]=1
    done

    # Collect the numbers that are missing
    for ((i = 1; i <= n; i++)); do
        if [[ ${present[$i]} -eq 0 ]]; then
            result+=($i)
        fi
    done

    # Print the result
    echo "${result[@]}"
}

echo $(findDisappearedNumbers 4 2 7 8 2 3 1)
echo $(findDisappearedNumbers 1 1)
