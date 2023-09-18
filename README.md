# zipteam-proc

# dependencies including dev
Typescript, eslint, express

## Run locally
1. npm run build
2. npm start

## RUN By Docker
1. docker build . -t zipteams
2. docker run --rm -d -p 4000:4000 --name zipteam-dev-containers zipteams

## API Exposed
After running by docker or locally - Exposed PORT:4000
1. /user/:userId/donate - to donate by userId

## Deploy
1. using `npm pack` to bundle up
2. extract the tar file created by `npm pack`
3. run the node by using `pm2`