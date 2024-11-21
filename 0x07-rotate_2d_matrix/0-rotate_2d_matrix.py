#!/usr/bin/python3
"""0-rotate_2d_matrix.py"""


def rotate_2d_matrix(matrix):
    """
    Rotates a 2D matrix 90 degrees clockwise.
    The rotation is done in place.
    """
    l, r = 0, len(matrix) - 1

    while l < r:
        for i in range(r - l):
            top, bottom = l, r

            # Save the top-left value
            topLeft = matrix[top][l + i]
            # Move bottom-left to top-left
            matrix[top][l + i] = matrix[bottom - i][l]
            # Move bottom-right to bottom-left
            matrix[bottom - i][l] = matrix[bottom][r - i]
            # Move top-right to bottom-right
            matrix[bottom][r - i] = matrix[top + i][r]
            # Move saved top-left to top-right
            matrix[top + i][r] = topLeft

        r -= 1
        l += 1