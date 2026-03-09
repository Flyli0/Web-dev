a = int(input("What year are we talking about?  "))
if a%400:
    print("This year is leap! ")
elif a%4 == 0 and a%100!=0:
    print("This year is leap!")
else:
    print("This year is regulars")
