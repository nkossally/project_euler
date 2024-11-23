import math

FAMILY_LENGTH = 7

bad_nums = []
primes = [2, 3, 5, 7]
def getIsPrime(num):
    for prime in primes:
        if num % prime == 0:
            return False
    primes.append(num)
    return True
    # i = math.floor(num / 2)
    # while i > 1:
    #     if num % i == 0: 
    #         return False
    #     i -= 1
    # return True

def getNIndices(num, n): 
    indicesCollection = []
    numStr = str(num)

    def helper(idx, indices): 
        if len(indices) == n:
            indicesCollection.append(indices)
            return
        if idx == len(numStr):
            return

        digitStr = numStr[idx]
        if len(indices) == 0 or numStr[indices[len(indices) - 1]] == digitStr:
            cpy = indices.copy()
            cpy.append(idx)
            helper(idx + 1, cpy)
        cpy = indices.copy()
        helper(idx + 1, cpy)

    helper(0, [])
    return indicesCollection


def tryNReplacements(num, n) :
    numStr = str(num)
    family = []

    def helper(indices, strSoFar, chosenNumber):
        idx = len(strSoFar)
        if len(strSoFar) == len(numStr):
            parsed = int(strSoFar)
            if getIsPrime(parsed):
                family.append(parsed)
            return
        if idx in indices:
            if chosenNumber != None:
                if not (chosenNumber == 0 and idx == 0) :
                    helper(indices, strSoFar + str(chosenNumber), chosenNumber)
            else: 
                for i in range(10):
                    if not (i == 0 and idx == 0):
                        helper(indices, strSoFar + str(i), i)

        else: 
            helper(indices, strSoFar + numStr[idx], chosenNumber)

    for i in range(1, len(numStr)):
        indicesCollection = getNIndices(num, i)
        for j in range(len(indicesCollection)):
            family = []
            indices = indicesCollection[j]
            helper(indices, "", None)
            # print("family", family)
            for num in family:
                bad_nums.append(num)

            if len(family) == FAMILY_LENGTH:
                return True
    return False



def hasFamilyOfEight(num) :
    for i in range(len(str(num))):
        if tryNReplacements(num, i):
            return True
    return False

def getSmallestPrimeWithEightReplacements():
    # num = 221000

    num = 11

    # num = 56000

    while(True):
        if not num in bad_nums and getIsPrime(num):
            if(hasFamilyOfEight(num)):
                return num
        num += 1

print(getSmallestPrimeWithEightReplacements())