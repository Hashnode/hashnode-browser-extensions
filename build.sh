#!/bin/bash
IMAGE_NAME="hashnode-extensions-builder"

docker build -t hashnode-extensions-builder .

docker run --name $IMAGE_NAME -it --rm -v "$(pwd)/builds:/app/builds" $IMAGE_NAME npm run build-all

echo "Cleaning up..."
docker rmi $IMAGE_NAME