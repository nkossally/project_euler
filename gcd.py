def gcd(a, b):
    a, b = min(a, b), max(a, b)
    while a:
        a, b = b % a, a
    return b

print(gcd(27, 18))

print(gcd(27, 24))