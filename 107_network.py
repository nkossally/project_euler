import copy

GLOBAL_MIN = 100000000000000000

def get_minimal_network():
    matrix_and_sum = get_matrix_and_sum()
    matrix = matrix_and_sum["matrix"]
    sum = matrix_and_sum["sum"]
    print("initial sum", sum)
    min_sum = minimize_matrix(matrix, sum, 0, -1)
    return min_sum

def get_matrix_and_sum():
    text_file = open("107_network.txt")
    arr = text_file.read().splitlines()
    text_file.close()
    matrix = list(map(split_string, arr))
    sum = 0
    for i in range(len(matrix)):
        row = matrix[i]
        for j in range(len(row)):
            if matrix[i][j] != "-":
                matrix[i][j] = int(matrix[i][j])
                sum += matrix[i][j]

    return {"matrix": matrix, "sum": sum}

def split_string(str):
    return str.split(",")

def test_num(idx, matrix):
    indices_left_to_connect = list(range(idx + 1, len(matrix)))
    seen_indices = []
    queue = [ idx ]

    while len(queue) > 0 and len(indices_left_to_connect) > 0:
        num = queue.pop(0)

        seen_indices.append(num)
        row = matrix[num]
        for i in range(len(row)):
            if row[i] != "-":
                if i in indices_left_to_connect:
                    indices_left_to_connect.remove(i)
                if i not in seen_indices and i != "-":
                    queue.append(i)
        
    return len(indices_left_to_connect) == 0

def minimize_matrix(matrix, sum, last_row, last_col):
    min_sum = sum
    before = sum
    # print("sum", sum, "last_row", last_row, "last_col", last_col )
    for i in range(last_row, len(matrix)):
        row = matrix[i]
        for j in range(len(row)):
            if i > last_row or (i == last_row and j > last_col):
                num = row[j]
                if num != "-":
                    cpy = copy.deepcopy(matrix)
                    cpy[i][j] = "-"
                    if get_all_connected(cpy):
                        other_sum = minimize_matrix(cpy, sum - num, i, j)
                        min_sum = min(min_sum, other_sum)

    if min_sum <= 33000:
        print(min_sum)
    
    return min_sum

def get_all_connected(matrix):
    for i in range(len(matrix)):
        i_is_connected = test_num(i, matrix)
        if not i_is_connected:
            return False
    
    return True

print(get_minimal_network())