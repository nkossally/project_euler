import math
import copy

BOARD_SIZE = 9

COUNT_LIMIT = 100

def solve_sudoku_boards():
    boards = getSudokuBoards()
    sum = 0
      
    for i in range(len(boards)):
        board = boards[i]
        result = solve_board_recursion(board, 0)
        if result:
            boards[i] = result
            sum += 100 * boards[i][0][0] + 10 * boards[i][0][1] + boards[i][0][2]
        else:
            print(boards[i])
    # print(boards)
    return sum

def check_cols_rows_and_sub_squares(board):

    made_change = check_sub_squares(board)
    made_change = made_change or check_cols_v2(board)
    made_change = made_change or check_rows_v2(board)

    if made_change:
        check_cols_rows_and_sub_squares(board)


def to_num(str):
    return int(str)

def getSudokuBoards():
    text_file = open("96_sudoku.txt")
    # text_file = open("96_sudoku_2.txt")
    arr = text_file.read().splitlines()
    text_file.close()

    boards = []
    board = []

    for i in range(len(arr )):
        if i % (BOARD_SIZE + 1) == 0:
            if i != 0:
                boards.append(board)
            board = []
        else:
            row = list(arr[i])
            row = list(map(to_num, row))
            board.append(row)
    boards.append(board)

    return boards

def get_nums_that_can_be_placed(board, i_arg, j_arg):
    if board[i_arg][j_arg] != 0:
        return []
    nums = list(range(1, BOARD_SIZE + 1))
    top_left_row = math.floor(i_arg / 3) * 3
    top_left_col = math.floor(j_arg / 3) * 3

    for i in range(top_left_row, top_left_row + 3):
        for j in range(top_left_col, top_left_col + 3):
            if board[i][j] in nums:
                nums.remove(board[i][j])
    
    row = board[i_arg]
    col = get_column(board, j_arg)
    for num in row:
        if num in nums:
            nums.remove(num)

    for num in col:
        if num in nums:
            nums.remove(num)

    return nums


def get_board():
    board = []
    for i in range(BOARD_SIZE):
        row = []
        for j in range(BOARD_SIZE):
            row.append([])
        board.append(row)
    return board

def get_column(board, col):
    arr = []
    for i in range(len(board)):
        arr.append(board[i][col])
    return arr

def get_num_to_indices():
    num_to_indices = {}
    for i in range(1, BOARD_SIZE + 1):
        num_to_indices[i] = []
    return num_to_indices

def check_rows_v2(board):
    made_change = False
    for row in range(BOARD_SIZE):
        num_to_indices = get_num_to_indices()
        for col in range(BOARD_SIZE):
            nums = get_nums_that_can_be_placed(board, row, col)
            for num in nums:
                num_to_indices[num].append([row, col])

        for num, indices in num_to_indices.items():
            if len(indices) == 1:
                row = indices[0][0]
                col = indices[0][1]
                board[row][col] = num
                made_change = True
    return made_change

def check_cols_v2(board):
    made_change = False

    for col in range(BOARD_SIZE):
        num_to_indices = get_num_to_indices()   
        for row in range(BOARD_SIZE):
            nums = get_nums_that_can_be_placed(board, row, col)
            for num in nums:
                num_to_indices[num].append([row, col])
    
        for num, indices in num_to_indices.items():
            if len(indices) == 1:
                row = indices[0][0]
                col = indices[0][1]
                board[row][col] = num
                made_change = True
    return made_change

def check_sub_squares(board):
    made_change = False
    three_indices = [0, 3, 6]
    for top_row in three_indices:
        for top_col in three_indices:
            num_to_indices = get_num_to_indices()
            
            for i in range(3):
                for j in range(3):
                    nums = get_nums_that_can_be_placed(board, top_row + i, top_col + j )
                    for num in nums:
                        num_to_indices[num].append([top_row + i, top_col + j])

            for num, indices in num_to_indices.items():
                if len(indices) == 1:
                    row = indices[0][0]
                    col = indices[0][1]
                    board[row][col] = num
                    made_change = True
    return made_change


def solve_board_recursion(board, count):
    if no_zeros(board):
        return board
    if count > 300:
        return False

    shortest  = float('inf')
    min_nums = None
    coordinates = None
    for row in range(BOARD_SIZE):

        for col in range(BOARD_SIZE):
            if board[row][col] == 0:
                nums = get_nums_that_can_be_placed(board, row, col)
                if len(nums) == 0:
                    return False
                if len(nums) < shortest:
                    min_nums = nums
                    shortest = len(nums)
                    coordinates = [row, col]

    if not min_nums:
        return False
    for num in min_nums:
        new_board = copy.deepcopy(board)
        new_board[coordinates[0]][coordinates[1]] = num
        check_cols_rows_and_sub_squares(new_board)
        result = solve_board_recursion(new_board, count + 1)
        if result:
            return result
        
    return False

def no_zeros(board):
    for row in range(BOARD_SIZE):
        for col in range(BOARD_SIZE):
            if board[row][col] == 0:
                return False
    return True

print(solve_sudoku_boards())