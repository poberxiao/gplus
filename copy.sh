#!/bin/sh
cd src
SOURCE_DIR=/home/welefen/Documents/www/web/www.welefen.com/wp-content/themes/gplus/*
cp -r $SOURCE_DIR gplus/
cd ../download/
ZIP_DIR=/home/welefen/Documents/www/tools/gplus/
cp -r $ZIP_DIR/*.zip .
cd ../


