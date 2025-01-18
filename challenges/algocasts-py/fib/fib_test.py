import unittest
import pytest
from fib import fib


class FibTest(unittest.TestCase):
    """FibTest"""

    @pytest.mark.task(taskno=1)
    def test_fib_1(self):
        """test fib(1)"""

        actual_result = fib(1)
        expected = 1
        error_message = (
            "Called fib(1). "
            f"The function returned {actual_result}, but the tests expected {expected}."
        )

        self.assertEqual(actual_result, expected, msg=error_message)

    @pytest.mark.task(taskno=2)
    def test_fib_2(self):
        """test fib(2)"""

        actual_result = fib(2)
        expected = 1
        error_message = (
            "Called fib(2). "
            f"The function returned {actual_result}, but the tests expected {expected}."
        )

        self.assertEqual(actual_result, expected, msg=error_message)

    @pytest.mark.task(taskno=3)
    def test_fib_3(self):
        """test fib(3)"""

        actual_result = fib(3)
        expected = 2
        error_message = (
            "Called fib(3). "
            f"The function returned {actual_result}, but the tests expected {expected}."
        )

        self.assertEqual(actual_result, expected, msg=error_message)

    @pytest.mark.task(taskno=4)
    def test_fib_4(self):
        """test fib(4)"""

        actual_result = fib(4)
        expected = 3
        error_message = (
            "Called fib(4). "
            f"The function returned {actual_result}, but the tests expected {expected}."
        )

        self.assertEqual(actual_result, expected, msg=error_message)

    @pytest.mark.task(taskno=5)
    def test_fib_15(self):
        """test fib(15)"""

        actual_result = fib(15)
        expected = 610
        error_message = (
            "Called fib(15). "
            f"The function returned {actual_result}, but the tests expected {expected}."
        )

        self.assertEqual(actual_result, expected, msg=error_message)

    @pytest.mark.task(taskno=6)
    def test_fib_25(self):
        """test fib(25) - this test is slow"""

        actual_result = fib(25)
        expected = 75025
        error_message = (
            "Called fib(25). "
            f"The function returned {actual_result}, but the tests expected {expected}."
        )

        self.assertEqual(actual_result, expected, msg=error_message)
