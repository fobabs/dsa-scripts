#!/usr/bin/env bash

findNumbers() {
    local count=0
    local nums=("$@")

    for num in "${nums[@]}"; do
        local length=${#num}
        if (( length % 2 == 0 )); then
            ((count++))
        fi
    done

    echo "$count"
}

# echo "$(findNumbers 12 345 2 6 7896)"
# echo "$(findNumbers 555 901 482 1771)"
