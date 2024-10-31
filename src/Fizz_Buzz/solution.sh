#!/usr/bin/env bash

fizzBuzz() {
    local result=()
    local n=$1

    for ((i = 1; i <= n; i++)); do
        if ((i % 15 == 0)); then
            result+=("FizzBuzz")
        elif ((i % 3 == 0)); then
            result+=("Fizz")
        elif ((i % 5 == 0)); then
            result+=("Buzz")
        else
            result+=("$i")
        fi
    done

    echo "${result[@]}"
}

# echo "$(fizzBuzz 3)"
# echo "$(fizzBuzz 5)"
# echo "$(fizzBuzz 15)"
