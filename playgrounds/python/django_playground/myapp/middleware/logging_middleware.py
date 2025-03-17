""" middleware.py """

import logging
from django.http import HttpResponse

# setup logger just for this middleware
logger = logging.getLogger(__name__)
handler = logging.StreamHandler()  # output to terminal
# set the formatter and attach to handler
formatter = logging.Formatter(fmt="%(asctime)s %(levelname)s; %(message)s")
handler.formatter = formatter
# attach the handler and set default
logger.addHandler(handler)
logger.setLevel(logging.INFO)

GREEN_ASCII="\033[92m"
RED_ASCII="\033[91m"
RESET_ASCII="\033[0m"

class LoggingMiddleware:
    """LoggingMiddleware"""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        logger.info(f"{GREEN_ASCII}Request Start: {request.path} ({request.method}){RESET_ASCII}")

        response = self.get_response(request)

        return response

    def process_exception(self, request, exception):
        logger.error(
            f"{RED_ASCII}Request exception: {request.path} ({request.method}) - {exception}{RESET_ASCII}"
        )
