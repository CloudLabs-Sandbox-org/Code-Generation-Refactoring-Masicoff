import sys

MAX = 100

def calculate_sum(arr):
    result = 0
    for num in arr:
        result += num
    return result

def main():
    try:
        arr = []
        print(f"Enter integers to sum (up to {MAX} numbers). Press Enter without input to finish:")

        while len(arr) < MAX:
            try:
                user_input = input()
                if user_input == "":
                    break
                arr.append(int(user_input))
            except ValueError:
                print("Invalid input. Please enter a valid integer.")

        if not arr:
            print("No numbers were entered.")
            exit(1)

        total = calculate_sum(arr)
        print("Sum of the numbers:", total)

    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
        exit(1)

if __name__ == "__main__":
    main()
