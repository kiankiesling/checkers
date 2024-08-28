def compare_player_names(search_string, parameter_string):
    str1 = str1 + ' ' * (len(str2) - len(str1))
    str2 = str2 + ' ' * (len(str1) - len(str2))
    return sum(1 if i == j else 0 for i, j in zip(str1, str2)) / float(len(str1))
