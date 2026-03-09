a = input()
b = a.split(" ")
c = set(b)

print(len(c))

for i in c:
    count = 0
    for j in b:
        if i == j:
            count += 1
    print(count, end="")

