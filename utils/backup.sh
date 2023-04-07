#!/bin/bash

echo "+++ Starting Backup ..."
NAME="wrh_organization"
ROOTDIR=/opt/webapps
PROJECTDIR=${ROOTDIR}/${NAME}
DJANGODIR=${PROJECTDIR}/${NAME}
ENVDIR=${PROJECTDIR}/env
DJANGO_SETTINGS_MODULE=wrh_organization.settings.main
BACKUP_DIR=${PROJECTDIR}/backup/`date +"%Y-%m-%d-%H-%M-%S"`.$RANDOM

echo "+++ Backing up $NAME to $BACKUP_DIR ..."
source ${ENVDIR}/bin/activate
cd ${DJANGODIR}/wrh_organization

mkdir -p ${BACKUP_DIR}

echo "+++ Dumping database ..."
python manage.py dbbackup -O ${BACKUP_DIR}/db.sql --settings=${DJANGO_SETTINGS_MODULE} --noinput
echo "+++ Database dump complete ..."
echo "+++ Backup Media ..."
python manage.py mediabackup -z -O ${BACKUP_DIR}/media.zip --settings=${DJANGO_SETTINGS_MODULE} --noinput
echo "+++ Media backup complete ..."

echo
echo "Finished Backup!"
