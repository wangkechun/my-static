chlblog:
	cp -Rf  ../old/summer/blog/ chlblog

chlresume:
	cp -Rf  ../old/summer/resume/ chlresume

snake:
	cp -Rf  ../old/summer/snake/ snake

logbook:
	rm -rf logbook/*
	cp -Rf ../Logbook/bower_components logbook/
	cp -Rf ../Logbook/index.html logbook/
	cp -Rf ../Logbook/public logbook/
deploy:
	ssh -v hi-hi.cn "cd www && git pull"

push:
	git push origin

.PHONY: chlblog deploy push chlresume snake logbook
