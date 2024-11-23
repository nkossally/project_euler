fp = "/Users/nkossally/Documents/GitHub/project_euler/11_data.txt"
def convert_to_int(string):
    return int(string)
def make_matrix():
    matrix = []
    with open(fp, 'r') as f:
        for line in f:
            arr =line.splitlines()
            arr2 = arr[0].split()
            arr3 = list(map(convert_to_int, arr2))

            if len(arr3) > 0:
                matrix.append(arr3)
    return matrix


def get_product():
    matrix = make_matrix()
    print(matrix)
    max_product = float('-inf')
    product_1 =  float('-inf')
    product_2 =  float('-inf')
    product_3 =  float('-inf')
    product_4 =  float('-inf')

    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if j <= len(matrix[0]) - 4:
                product_1 = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3]
            if i <= len(matrix) - 4:
                product_2 = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j]
            if j <= len(matrix[0]) - 4 and i <= len(matrix) - 4:
                product_3 = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3]
            if j >= 3 and i <= len(matrix) - 4:
                product_4 = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3]

            max_product = max(max_product, product_1, product_2, product_3, product_4)
            print(i, j, product_1, product_2, product_3, product_4)
    return max_product

print(get_product())