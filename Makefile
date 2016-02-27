chlblog:
	cp -Rf  ../old/summer/blog/ chlblog

chlresume:
	cp -Rf  ../old/summer/resume/ chlresume

snake:
	cp -Rf  ../old/summer/snake/ snake

deploy:
	ssh -v hi-hi.cn "cd www && git pull"

push:
	git push origin

.PHONY: chlblog deploy push
