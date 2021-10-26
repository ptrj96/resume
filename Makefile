deploy:
	npm run build
	sudo cp -r build/* /var/www/resume.ptrj.xyz/html