""" Vehicle class """


class Vehicle:
    """ Vehicle class"""

    def __init__(self, starting_top_speed=100):
        self.top_speed = starting_top_speed
        self.__warnings = []

    def __repr__(self):
        """ custom printer """
        print('Printing...')
        print_str = f'Top Speed: {self.top_speed}, Warnings: {len(self.__warnings)}'
        return print_str

    def add_warning(self, warning_text):
        """ add warning """
        if len(warning_text) > 0:
            self.__warnings.append(warning_text)

    def get_warnings(self):
        """ get warnings """
        return self.__warnings

    def drive(self):
        """ print drive info """
        print(f'I am driving but certainly not faster than {self.top_speed}')
