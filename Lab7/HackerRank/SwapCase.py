a = input()
a = str(a)
res = ''
UP = [chr(s) for s in range (65,91)]
LOW = [chr(s) for s in range (97,123)]
for i in a:
    if i in UP:
        i = i.lower()
    elif i in LOW:
        i = i.upper()
    res += i
print(res)