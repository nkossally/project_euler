def parse_string(str):
    return int(str)

def split_nums(str):
    list_of_strings = str.split()
    return list(map(parse_string, list_of_strings))

def build_triangle():
    # build dawg
    text_file = open("67_names.txt", "r")
    big_list = text_file.read().splitlines()
    text_file.close()
    triangle = list(map(split_nums, big_list))
    return triangle

def get_best_path_sum():
    triangle = build_triangle()
    dp = [ [ triangle[0][0] ] ]

    for i in range(1, len(triangle)):
        dp.append([])
        for j in range(len(triangle[i])):
            way1 = dp[i - 1][j - 1] if j > 0 else 0
            way2 =  dp[i - 1][j]  if j <  len(triangle[i - 1]) else 0
            dp[i].append(max(way1, way2) + triangle[i][j])
 
    return max(dp[len(dp) - 1])


print(get_best_path_sum())