def year_is_leap(year:int):
    leap = False
    if year % 400:
        leap = True
    elif year % 4 == 0 and year % 100 != 0:
        leap = True
    return leap

