# Use the official Node.js 14 image
FROM node:14-alpine

# Create a new user with UID 10014
RUN addgroup -g 10014 choreo && \
    adduser --disabled-password --no-create-home --uid 10014 --ingroup choreo choreouser

# Set working directory
WORKDIR /app

VOLUME /tmp

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies as root
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Change ownership of the application files
RUN chown -R choreouser:choreo /app

# Switch to non-root user
USER 10014

# Expose the port on which your application listens
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
