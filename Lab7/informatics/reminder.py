t = input("insert 4 numbers \n")
a, b, c, d = map(int, t.split())

for i in range(a,b):
    if i%d == c:
        print(i)
