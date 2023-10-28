#!/bin/bash

task-publish() {
    set -e

    git fetch --all

    git checkout master

    yarn build

    git checkout gh-pages
    git add dist
}

"task-$1"
