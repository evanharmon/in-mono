"""Functions to help Azara and Rui locate pirate treasure."""


def get_coordinate(record: tuple):
    """Return coordinate value from a tuple containing the treasure name, and treasure coordinate.

    :param record: tuple - with a (treasure, coordinate) pair.
    :return: str - the extracted map coordinate.
    """

    return record[1]


def convert_coordinate(coordinate: str):
    """Split the given coordinate into tuple containing its individual components.

    :param coordinate: str - a string map coordinate
    :return: tuple - the string coordinate split into its individual components.
    """

    return tuple(coordinate)


def compare_records(azara_record: tuple, rui_record: tuple):
    """Compare two record types and determine if their coordinates match.

    :param azara_record: tuple - a (treasure, coordinate) pair.
    :param rui_record: tuple - a (location, tuple(coordinate_1, coordinate_2), quadrant) trio.
    :return: bool - do the coordinates match?
    """

    azara_coordinate = azara_record[1]
    rui_coordinate = "".join(rui_record[1])
    return azara_coordinate == rui_coordinate


def create_record(azara_record: tuple, rui_record: tuple):
    """Combine the two record types (if possible) and create a combined record group.

    :param azara_record: tuple - a (treasure, coordinate) pair.
    :param rui_record: tuple - a (location, coordinate, quadrant) trio.
    :return: tuple or str - the combined record (if compatible), or the string "not a match" (if incompatible).
    """

    azara_coord = azara_record[1]
    rui_coord = "".join(rui_record[1])
    if azara_coord != rui_coord:
        return "not a match"

    return azara_record + rui_record


def clean_up(combined_record_group: tuple):
    """Clean up a combined record group into a multi-line string of single records.

    :param combined_record_group: tuple - everything from both participants.
    :return: str - everything "cleaned", excess coordinates and information are removed.

    The return statement should be a multi-lined string with items separated by newlines.

    (see HINTS.md for an example).
    """

    # Clean up and reformat
    # record format will be `('Treasure', 'Location Name', 'Coord Tuple', 'Quadrant')`
    cleaned_records = []
    for rec in combined_record_group:
        cleaned_records.append(tuple((rec[0], rec[2], rec[3], rec[4])))

    # Report format with newlines - iterate
    report = ""
    for record in cleaned_records:
        report += format(f"{record}\n")

    return report
