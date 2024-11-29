def parse_string(str):
    return int(str)

def split_nums(str):
    list_of_strings = str.split(",")
    return list(map(parse_string, list_of_strings))

def build_array():
    # build dawg
    text_file = open("99_base_exp.txt", "r")
    big_list = text_file.read().splitlines()
    text_file.close()
    arr = list(map(split_nums, big_list))
    return arr

def get_is_larger(a, b, c, d):
    num_1 = 1
    exp_left = b
    num_2 = 1
    exp_left_2 = d

    while exp_left > 0 and exp_left_2 > 2:
        while num_2 <= num_1 and exp_left_2 > 0:
            num_2 *= c
            exp_left_2 -= 1
        while num_1 <= num_2 and exp_left > 0:
            num_1 *= a
            exp_left -= 1
        while num_1 > 1 and num_2 > 1:
            num_1 /= c
            num_2 /= c
    # print(num_1 * pow(a, exp_left) , num_2 * pow(c, exp_left_2))
    return num_1 * pow(a, exp_left) > num_2 * pow(c, exp_left_2)

    


def get_largest_exp():
    arr = build_array()

    largest_idx = 0
    for i in range(1, len(arr)):
        largest = arr[largest_idx]
        pair = arr[i]
        if get_is_larger(pair[0], pair[1], largest[0], largest[1]):
            largest_idx = i
        print (i, largest_idx, arr[largest_idx])
    return largest_idx + 1

print(pow(2, 10))

print(get_largest_exp())