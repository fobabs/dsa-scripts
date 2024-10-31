#!/usr/bin/env bash

heightChecker() {
    local count=0
    local heights=("$@")
    local n=${#heights[@]}
    local -a expected=("${heights[@]}")

    # Sort the expected array
    IFS=$'\n' expected=($(sort -n <<<"${expected[*]}"))
    unset IFS

    # Compare heights with sorted expected heights
    for i in "${!heights[@]}"; do
        if [[ ${heights[i]} -ne ${expected[i]} ]]; then
            ((count++))
        fi
    done

    echo "$count"
}

# echo "$(heightChecker 1 1 4 2 1 3)"
# echo "$(heightChecker 5 1 2 3 4)"
# echo "$(heightChecker 1 2 3 4 5)"
