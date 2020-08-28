FROM ubuntu:18.04

# Install packages and utilities
RUN apt-get -y update && apt-get -y install \
	vim \
	curl \
	sudo \
	emacs

# Install node version 11.
# For Other vesion remplace setup_10.x or 11.x or 12.x
RUN curl --silent --location https://deb.nodesource.com/setup_11.x  | sudo bash -
RUN sudo apt-get -y update \
	&& sudo apt-get -y install nodejs

RUN export NODE_PATH=/usr/lib/node_modules
RUN rm -rf /var/lib/apt/lists/*

# Install packages...
RUN sudo npm install -g express

# start run!
CMD [ "bash" ]