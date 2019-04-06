#!/usr/bin/env bash
while [[ $# -gt 0 ]] 
do
key="$1"

case $key in
	# parse generate argument
	-g|--generate)
		REDUCER_KEY=${2}
		REDUCER_NAME=${2}Reducer
		DIR_NAME=~/Code/coworking-platform/src/reducers/
		# Create new file and populate with base code.
		printf "const initialState = {}\n\nconst $REDUCER_NAME = (state = initialState, action) => {\n  switch (action.type) {\n    default:\n      return state\n  }\n}\n\nexport default $REDUCER_NAME" >> $DIR_NAME/${REDUCER_NAME}.js
		# Update reducers/index.js para que importe a este tmb	
		
		shift
		shift
	;;
	# parse delete argument
	-d|--delete)
		REDUCER_KEY=${2}
		REDUCER_NAME=${2}Reducer
		DIR_NAME=~/Code/coworking-platform/src/reducers/
		rm $DIR_NAME/${REDUCER_NAME}.js
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
