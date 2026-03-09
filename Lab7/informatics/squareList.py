import math

a = int(input())
i = 0
while i < a:
    if (math.sqrt(i))**2 == i:
        print(i)
    i+=1


