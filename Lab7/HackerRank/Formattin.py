a = int(input())

for i in range(a):
    print(oct(i)[2:])
    print(hex(i)[2:].upper())
    print(bin(i)[2:])