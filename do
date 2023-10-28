#!/bin/bash

cd $(dirname $(realpath "$0"))

task-publish() {
    set -e

    git fetch --all

    git checkout master

    yarn build

    git checkout gh-pages

    rm -rf docs
    mv dist docs
    git add docs
}

"task-$1"