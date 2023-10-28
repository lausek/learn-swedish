#!/bin/bash

cd $(dirname $(realpath "$0"))

task-publish() {
    set -e

    yarn build

    rm -rf docs
    mv dist docs

    git add docs
}

"task-$1"
