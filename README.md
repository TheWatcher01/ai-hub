# AI-HUB Installation Guide

Follow these steps to install and run AI-HUB on your system:

## Prerequisites
- Ensure you have **Docker** and **Docker Compose** installed on your system.
- Verify that your system meets the necessary requirements for running AI-HUB.

## Installation Steps

1. **Clone the Repository**  
   Clone the AI-HUB repository from GitHub:
   ```bash
   git clone https://github.com/TheWatcher01/ai-hub.git
   ```

2. **Navigate to the Project Directory**  
   Change into the cloned repository's directory:
   ```bash
   cd ai-hub
   ```

3. **Start the Application**  
   Use Docker Compose to start the application:
   ```bash
   docker compose up -d
   ```

   This will start all the necessary services in detached mode.

## Additional Notes
- To stop the application, run:
  ```bash
  docker compose down
  ```
- For advanced configuration options, refer to the run-compose.sh script or use the `--help` flag:
  ```bash
  ./run-compose.sh --help
  ```

Enjoy using AI-HUB!
