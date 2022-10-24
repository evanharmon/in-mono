""" Car class """
from vehicle import Vehicle


class Car(Vehicle):
    """ Car class """

    def brag(self):
        """ brag about the car """
        print('Look how cool my car is!')


car1 = Car()
car1.drive()

car1.add_warning('New warning')
print(car1)

car2 = Car(200)
car2.drive()
print(car2.get_warnings())

car3 = Car(250)
car3.drive()
print(car3.get_warnings())
