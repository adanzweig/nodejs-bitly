# Link Shortener

## Description
This project is a simple Node.js application that uses the Bitly API to shorten URLs. It's designed to demonstrate basic API interaction using Axios in a Node.js environment.

## Features
- Shorten long URLs using Bitly.
- Environment variables for secure API key storage.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- A Bitly account and access token.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/adanzweig/nodejs-bitly.git
   ```
2. Navigate to the project directory:
   ```
   cd nodejs-bitly
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up your `.env` file with your Bitly access token:
   ```
   ACCESS_TOKEN=your_bitly_access_token_here
   ```

## Usage
Run the script using the following command:
```
node index.js
```
The script will shorten a predefined URL and print the result to the console.

## Contributing
Contributions are welcome. Please open an issue to discuss your idea or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [Bitly API](https://dev.bitly.com/)
- [Axios](https://github.com/axios/axios)
