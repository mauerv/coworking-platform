#!/usr/bin/env bash

while [[ $# -gt 0 ]] 
do
key="$1"
case $key in
	# parse generate argument
	-g|--generate)
		COMPONENT_NAME=$2
		DIR_NAME=~/Code/coworking-platform/src/components/$COMPONENT_NAME
		mkdir $DIR_NAME
		echo "import styled from 'styled-components'" >> $DIR_NAME/styles.js
		printf "import React from 'react'\n\nconst $COMPONENT_NAME = () => (\n  <div>\n    $COMPONENT_NAME\n  </div>\n)\n\nexport default $COMPONENT_NAME" >> $DIR_NAME/index.js
		shift
		shift
	;;
	# parse delete argument
	-d|--delete)
		COMPONENT_NAME=$2
		DIR_NAME=~/Code/coworking-platform/src/components/$COMPONENT_NAME 
		rm -rf $DIR_NAME
		shift
		shift
	;;
	# unknown option
	*)
		echo "Unknown argument: $key"
		shift
	;;
esac
done


