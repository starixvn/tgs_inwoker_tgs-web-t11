docker login -u pgtgs
docker build -f Dockerfile -t pgtgs/lobby-t11:dev .
docker push pgtgs/lobby-t11:dev
pause