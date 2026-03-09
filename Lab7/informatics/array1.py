a = int(input())
b = [int(input()) for i in range(a)]

for i in range(len(b)):
    if i%2 == 0:
        print(b[i], end=' ')
        