"""Functions for organizing and calculating student exam scores."""


def round_scores(student_scores: list):
    """Round all provided student scores.

    :param student_scores: list - float or int of student exam scores.
    :return: list - student scores *rounded* to nearest integer value.
    """
    scores = []
    while len(student_scores) > 0:
        score = student_scores.pop()
        scores.append(round(score))

    return scores


def count_failed_students(student_scores: list):
    """Count the number of failing students out of the group provided.

    :param student_scores: list - containing int student scores.
    :return: int - count of student scores at or below 40.
    """

    fail_cnt = 0
    for score in student_scores:
        if score <= 40:
            fail_cnt += 1

    return fail_cnt


def above_threshold(student_scores: list, threshold: int):
    """Determine how many of the provided student scores were 'the best' based on the provided threshold.

    :param student_scores: list - of integer scores.
    :param threshold: int - threshold to cross to be the "best" score.
    :return: list - of integer scores that are at or above the "best" threshold.
    """

    return_scores = []
    for score in student_scores:
        if score >= threshold:
            return_scores.append(score)

    return return_scores


def letter_grades(highest: int):
    """Create a list of grade thresholds based on the provided highest grade.

    :param highest: int - value of highest exam score.
    :return: list - of lower threshold scores for each D-A letter grade interval.
            For example, where the highest score is 100, and failing is <= 40,
            The result would be [41, 56, 71, 86]:

            41 <= "D" <= 55
            56 <= "C" <= 70
            71 <= "B" <= 85
            86 <= "A" <= 100
    """
    # # Easy to understand attempt 1:
    # # Calculate grade thresholds
    # # 40 or below is always failing
    # score_range = highest - 40
    # # D, C, B, A - 4 grade thresholds
    # grade_interval = score_range / 4
    # grade_f = [40]
    # grade_d = [grade_f[0] + 1, int(grade_f[0] + grade_interval)]
    # grade_c = [grade_d[1] + 1, int(grade_d[1] + grade_interval)]
    # grade_b = [grade_c[1] + 1, int(grade_c[1] + grade_interval)]
    # grade_a = [grade_b[1] + 1, int(grade_b[1] + grade_interval)]

    # grade_thresholds = [grade_d[0], grade_c[0], grade_b[0], grade_a[0]]
    # return grade_thresholds

    # Attempt 3: simple for loop
    thresholds = []
    # only calculate bottom of grade range D, C, B, A
    grade_interval = int((highest - 40) / 4)
    for grade_idx in range(0, 4):
        # have to add one to go above previous range
        # example: f max is 40, so D min should be 41
        thresholds.append((grade_idx * grade_interval) + 40 + 1)
    return thresholds


def student_ranking(student_scores: list, student_names: list):
    """Organize the student's rank, name, and grade information in descending order.

    :param student_scores: list - of scores in descending order.
    :param student_names: list - of string names by exam score in descending order.
    :return: list - of strings in format ["<rank>. <student name>: <score>"].
    """

    # attempt 1: manual merging of lists
    ranking = []
    # working on assumption that lists are correctly ordered with one another
    for idx, score in enumerate(student_scores):
        ranking.append(format(f"{idx + 1}. {student_names[idx]}: {score}"))

    return ranking


def perfect_score(student_info: list):
    """Create a list that contains the name and grade of the first student to make a perfect score on the exam.

    :param student_info: list - of [<student name>, <score>] lists.
    :return: list - first `[<student name>, 100]` or `[]` if no student score of 100 is found.
    """

    # attempt 1: easy to ready straight forward nested for loop
    for info in student_info:
        if info[1] == 100:
            return [info[0], info[1]]

    return []
