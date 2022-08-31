# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build:ngssc


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

ADD https://github.com/kyubisation/angular-server-side-configuration/releases/download/v14.0.1/ngssc_64bit /usr/sbin/ngssc
RUN chmod +x /usr/sbin/ngssc
# Add ngssc init script
COPY ngssc.sh /docker-entrypoint.d/ngssc.sh
RUN chmod +x /docker-entrypoint.d/ngssc.sh

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/test-server-side-configuration /usr/share/nginx/html
ENV OS1 PRUEBA
# Expose port 80
EXPOSE 80