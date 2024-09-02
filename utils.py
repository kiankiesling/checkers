def compare_player_names(search_string, parameter_string):
    str1 = search_string + " " * (len(parameter_string) - len(search_string))
    str2 = parameter_string + " " * (len(str1) - len(parameter_string))
    return sum(0 if i == j else 1 for i, j in zip(str1, str2)) / float(len(str1))
