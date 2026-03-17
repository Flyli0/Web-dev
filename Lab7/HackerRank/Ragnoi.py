def print_rangoli(size):
    import string
    alpha = string.ascii_lowercase

    width = 4 * size - 3

    for i in range(size):
        s = "-".join(alpha[i:size])
        line = s[::-1] + s[1:]
        print(line.center(width, '-'))

    for i in range(size - 2, -1, -1):
        s = "-".join(alpha[i:size])
        line = s[::-1] + s[1:]
        print(line.center(width, '-'))