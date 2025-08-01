# Use official Node.js 18 image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all source files
COPY . .

# Set environment variable PORT to 8080 (Cloud Run expects 8080)
ENV PORT=8080

# Expose port 8080
EXPOSE 8080

# Start the app using npm start (make sure your package.json has "start" script)
CMD ["npm", "start"]
