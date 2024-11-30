import math

BOARD_SIZE = 9

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

def to_num(str):
    return int(str)

def getSudokuBoards():
    # text_file = open("96_sudoku.txt")
    text_file = open("96_sudoku_2.txt")
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

def process_square(board, i, j, possibilities):
    nums = list(range(1, BOARD_SIZE + 1))

    for row in range(i, i + 3):
        for col in range(j, j + 3 ):
            val = board[row][col]
            if val in nums:
                nums.remove(val)
    
    for row in range(i, i + 3):
        for col in range(j, j + 3 ):
            if board[row][col] == 0:
                valid_nums_for_block = nums.copy()
                for k in range(BOARD_SIZE):
                    val_1 = board[row][k]
                    val_2 = board[k][col]
                    if val_1 in valid_nums_for_block:
                        valid_nums_for_block.remove(val_1)
                    if val_2 in valid_nums_for_block:
                        valid_nums_for_block.remove(val_2)
                if len(valid_nums_for_block) == 1:
                    board[row][col] = valid_nums_for_block[0]
                    remove_num_from_possibilities( valid_nums_for_block[0], possibilities, row, col)
                    nums.remove(valid_nums_for_block[0])
                else:
                    possibilities[row][col] = valid_nums_for_block
    
    num_to_indices = get_num_to_indices()

    for row in range(i, i + 3):
        for col in range(j, j + 3 ):
            if possibilities[row][col]:
                for num in possibilities[row][col]:
                    if not num_to_indices[num]:
                        num_to_indices[num] = []
                    num_to_indices[num].append([row, col])


    for num in nums:
        possible_indices = num_to_indices[num]
        print("possible_indices")
        print(possible_indices)
        for idx in range(BOARD_SIZE):
            idx_row_indices =  list(filter(lambda indices: indices[0] == idx, possible_indices))
            # print("num")
            # print(num)
            # print("idx")
            # print(idx)
            # print("filter")
            # print(idx_row_indices)
            if len(idx_row_indices) == 1:
                row = idx_row_indices[0][0]
                col = idx_row_indices[0][1]
                board[row][col] = num
                num_to_indices[num].remove([row, col])
                remove_num_from_possibilities(num, possibilities, row, col)
        for idx in range(BOARD_SIZE):
            idx_col_indices =  list(filter(lambda indices: indices[1] == idx, possible_indices))
            print(idx_col_indices)
            if len(idx_col_indices) == 1:
                row = idx_col_indices[0][0]
                col = idx_col_indices[0][1]
                board[row][col] = num
                num_to_indices[num].remove([row, col])
                remove_num_from_possibilities(num, possibilities, row, col)
    print(board)
    print(possibilities)
    print(num_to_indices)

def solve_board(board):
    possibilities = get_board()

    for i in range(0, BOARD_SIZE, 3):
        for j in range(0, BOARD_SIZE, 3):
            process_square(board, i, j, possibilities)
    evaluate_rows_and_cols(board, possibilities)

    # return True if there is a zero on the subsquare
    for row in range(BOARD_SIZE):
        for col in range(BOARD_SIZE):
            if board[row][col] == 0:
                return 0
    return 100 * board[0][0] + 10 * board[0][1] + board[0][2]

def remove_num_from_possibilities(num, possibilities, i, j):
    possibilities[i][j] = []
    for row in range(BOARD_SIZE):
        if num in possibilities[row][j]:
            possibilities[row][j].remove(num)
    for col in range(BOARD_SIZE):
        if num in possibilities[i][col]:
            possibilities[i][col].remove(num)
    
def evaluate_rows_and_cols(board, possibilities):
    for i in range(BOARD_SIZE):
        num_to_indices = get_num_to_indices()
        for j in range(BOARD_SIZE):
            if board[i][j] == 0:
                for num in possibilities[i][j]:
                    num_to_indices[num].append([i, j])
        for num, indices in num_to_indices.items():
            row = indices[0][0]
            col = indices[0][1]
            if len(indices) == 1 and num not in board[row]:

                board[row][col] = num
                remove_num_from_possibilities(num, possibilities, row, col)

    # look at columns
    for i in range(BOARD_SIZE):
        num_to_indices = get_num_to_indices()
        for j in range(BOARD_SIZE):
            if board[j][i] == 0:
                for num in possibilities[j][i]:
                    num_to_indices[num].append([j, i])
        for num, indices in num_to_indices.items():
            row = indices[0][0]
            col = indices[0][1]
            if len(indices) == 1  and num not in board[row]:

                board[row][col] = num
                remove_num_from_possibilities(num, possibilities, row, col)


    return

def get_nums_that_can_be_placed(board, i, j):
    if board[i][j] != 0:
        return []
    nums = []
    top_left_row = math.floor(i / 3)
    top_left_col = math.floor(j, 3)
    for num in range(1, BOARD_SIZE + 1):
        

def solve_sudoku_boards():
    boards = getSudokuBoards()
    sum = 0
    continue_solving = True
    count = 0

    while continue_solving and count < 100:
        continue_solving = False
        count += 1
        sum = 0

        for i in range(len(boards)):
            board = boards[i]

            board_sum = solve_board(board)
            if board_sum == 0:
                if count == 1000:
                    print("adding nothing")
                continue_solving = True
            else:
                sum += board_sum

    print(boards)
    return sum

print(solve_sudoku_boards())