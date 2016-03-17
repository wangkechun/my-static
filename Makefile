chlblog:
	cp -Rf  ../HomePage/ chlblog

chlblogv2:
	cp -Rf  ../Blog/ chlblogv2
	trash chlblogv2/.git

chlresume:
	rm -rf chlresume
	cp -Rf  ../chlResume/ chlresume

snake:
	cp -Rf  ../Snake_React/ snake

logbook:
	rm -rf logbook/*
	cp -Rf ../Logbook/bower_components logbook/
	cp -Rf ../Logbook/index.html logbook/
	cp -Rf ../Logbook/public logbook/
deploy:
	ssh -v hi-hi.cn "cd www && git pull"

push:
	git push origin

.PHONY: chlblog deploy push chlresume snake logbook chlblogv2
