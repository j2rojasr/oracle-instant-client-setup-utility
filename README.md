Oracle Instant Client Setup Utility
===

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## About The Project

The Oracle Instant Client Setup Utility streamlines the download, extraction, and configuration process necessary to get started with Oracle database development on Windows. This includes downloading the appropriate versions of Oracle Instant Client and Visual Studio Redistributable, extracting these packages to a specified location, and updating the system `PATH` to include the Oracle Instant Client.

### Built With

- [Node.js](https://nodejs.org/)
- [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client.html)
- [Visual Studio Redistributable](https://learn.microsoft.com/es-es/cpp/windows/latest-supported-vc-redist)

## Getting Started

### Prerequisites

- Node.js (20.x or later)

### Installation

1. Clone the repo
```sh
  git clone https://github.com/j2rojasr/oracle-instant-client-setup-utility.git
```

2. Navigate to the cloned directory
```sh
  cd oracle-instant-client-setup-utility
```

2. Install NPM packages
```sh
  npm install
```

## Usage

Run the utility from the command line to start the setup process:

```sh
  npm start
```

## License

MIT
