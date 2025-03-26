# Importing necessary modules
import itertools
import random

# Create a deck of cards (1-13 for ranks, and four suits)
deck = list(itertools.product(range(1, 14), ['Spade', 'Heart', 'Diamond', 'Club']))

# Shuffle the deck
random.shuffle(deck)

# Draw five cards
print("You got:")
for i in range(5):
    rank = deck[i][0]
    suit = deck[i][1]

    # Convert rank to face cards for better readability
    if rank == 1:
        rank = "Ace"
    elif rank == 11:
        rank = "Jack"
    elif rank == 12:
        rank = "Queen"
    elif rank == 13:
        rank = "King"

    print(f"{rank} of {suit}")
