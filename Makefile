chlblog:
	cp -Rf  ../old/summer/blog/ chlblog
deploy:
	ssh -v hi-hi.cn "cd www && git pull"
.PHONY: chlblog
