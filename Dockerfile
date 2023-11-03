# Build: docker build -t ui-flowdown .
# Run:   docker run -t -i -p 3000:3000 ui-flowdown

# Use an official Node.js runtime as base image
FROM node:16

RUN mkdir -p /service/ui-flowdown

WORKDIR /service/ui-flowdown

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application
CMD ["node", "server.js"]