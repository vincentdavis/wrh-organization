#!/bin/bash

if [ -n "$1" ]; then
  TAG=$1
fi

NAME="wrh_organization"
GITURL=https://github.com/we-race-here/wrh-organization.git
ROOTDIR=/opt/webapps
PROJECTDIR=${ROOTDIR}/${NAME}
DJANGODIR=${PROJECTDIR}/${NAME}
ENVDIR=${PROJECTDIR}/env
DJANGO_SETTINGS_MODULE=wrh_organization.settings.main

mkdir -p ${PROJECTDIR}
mkdir -p ${PROJECTDIR}/run
mkdir -p ${PROJECTDIR}/logs
mkdir -p ${PROJECTDIR}/etc
mkdir -p ${PROJECTDIR}/tmp

if [ -d "$DJANGODIR" ]; then
  cd ${DJANGODIR}
  git checkout master
  git reset --hard HEAD
  git pull origin --tags
else
  git clone --tags ${GITURL} ${DJANGODIR}
fi
if [ -z "${TAG}" ]; then
  TAG=$(git tag --sort=committerdate | tail -1)
fi

git checkout ${TAG}
echo "+++ Deploying $NAME: TAG=$TAG PROJECTDIR=$PROJECTDIR ..."
sudo supervisorctl stop ${NAME}
sudo supervisorctl stop ${NAME}-huey
sleep 1
if [ ! -d "$ENVDIR" ]; then
  virtualenv -p python3 ${ENVDIR}
fi
source ${ENVDIR}/bin/activate
cp ${DJANGODIR}/utils/daphne_start.sh ${ENVDIR}/bin/
chmod +x ${ENVDIR}/bin/daphne_start.sh

cd ${DJANGODIR}
pip install -r requirements.txt
pip install daphne
cd ${DJANGODIR}/wrh_organization
python manage.py migrate --settings=${DJANGO_SETTINGS_MODULE} --noinput
python manage.py collectstatic --settings=${DJANGO_SETTINGS_MODULE} --noinput
sudo supervisorctl start ${NAME}
sudo supervisorctl start ${NAME}-huey
sudo service supervisor restart
sudo service nginx restart

echo
echo "Finished!"
