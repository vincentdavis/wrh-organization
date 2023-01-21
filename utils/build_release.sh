#!/bin/bash

inc_ver_type=patch
if [ -n "$1" ]; then
    inc_ver_type=$1
fi

NAME="wrh_organization"
CUR_DIR=`dirname -- "$0"`

cd ${CUR_DIR}
cd ..
BASE_DIR=$(pwd)
FRONTEND_DIR=${BASE_DIR}/wrh_organization/FRONTEND/wrh_organization_ui

git checkout master
git pull

cd ./wrh_organization

BACKEND_VERSION=$(cat ./VERSION)
NEW_BACKEND_VERSION=$(pysemver bump ${inc_ver_type} ${BACKEND_VERSION})
echo ${NEW_BACKEND_VERSION} > ./VERSION

cd ${FRONTEND_DIR}
FRONTEND_VERSION=$(node -p "require('./package.json').version")
NEW_FRONTEND_VERSION=$(npm version ${inc_ver_type})
NEW_FRONTEND_VERSION=$(echo ${NEW_FRONTEND_VERSION} | sed 's/v//')

RELEASE_NUMBER=${NEW_BACKEND_VERSION}-${NEW_FRONTEND_VERSION}
echo "Building release #[${RELEASE_NUMBER}] ..."

npm run build
if [ $? -ne 0 ]; then
  echo "Failed to build!";
  npm version ${FRONTEND_VERSION};
  echo ${BACKEND_VERSION} > ${BASE_DIR}/wrh_organization/VERSION
  exit 1;
fi

git add -A && git commit -m "[RELEASE VERSION] ${RELEASE_NUMBER}";

git branch -D lastest-release 2>/dev/null
git push origin --delete lastest-release 2>/dev/null

## Create a new branch to run the build under
git checkout -b lastest-release
newIgnore=`sed -e 's#dist##g' .gitignore`
echo "$newIgnore" > .gitignore
git add -A && git commit -m "[RELEASE] ${RELEASE_NUMBER}"

git checkout master
git tag "${RELEASE_NUMBER}" lastest-release
git push origin "${RELEASE_NUMBER}"
git push origin lastest-release
git push origin master

echo "Finished Build Release: [${RELEASE_NUMBER}]!"
