ARG VERSION=3-bullseye
FROM python:${VERSION}

# [Optional] Non-pipx pip installs
RUN pip3 install pylint pipx

# [Optional] add rarely changing pip reqs to image, prefer Pipfile with pipx pipenv use
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#   rm -rf /tmp/pip-tmp

# pipenv install pytest pytest-cov pytest-cache pytest-subtests

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1

WORKDIR /app

# [Optional] change default entrypoint
# ENTRYPOINT [ "python" ]