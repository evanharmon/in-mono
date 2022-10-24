""" Bus class """
from vehicle import Vehicle


class Bus(Vehicle):
    """ Bus class from vehicle import Vehicle """

    def __init__(self, starting_top_speed=100):
        super().__init__(starting_top_speed)
        self.passengers = []

    def add_group(self, passengers):
        """ add group of passengers to the bus """
        self.passengers.extend(passengers)


bus1 = Bus(150)
bus1.add_warning('Test of the bus warning system')
bus1.add_group(['Evan', 'Mala', 'Kyle', 'Alan'])
print(bus1.passengers)
bus1.drive()
