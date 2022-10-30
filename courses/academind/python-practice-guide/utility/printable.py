""" printable module """


class Printable():
    """ printable class helpers """

    def __repr__(self):
        return str(self.__dict__)
