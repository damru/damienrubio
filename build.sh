#!/usr/bin/env bash

DIR="$(dirname "$(readlink -f "$0")")"
docker build -t damru/damienrubio ${DIR}
docker push damru/damienrubio