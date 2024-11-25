import string

fp = "/Users/nkossally/Documents/GitHub/project_euler/22_names.txt"
def remove_quotes(string):
    return string[1: -1]

def char_position(char):
    return string.ascii_uppercase.index(char) + 1

def get_scores():
    names = []
    total_score = 0
    with open(fp, 'r') as f:
        for line in f:
            arr =line.split(',')
            names = list(map(remove_quotes, arr))
            print(names)
            # if len(arr3) > 0:
            #     matrix.append(arr3)
    names.sort()
    for idx, name in enumerate(names):
        score = 0
        for letter in name:
            score += char_position(letter)
        total_score += score * (idx + 1)

    return total_score

print(get_scores())
