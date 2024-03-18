// https://www.oracle.com/database/technologies/instant-client.html
const oracleVersionInfo = [
  {
    "version": "21.13.0.0.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn_software/nt/instantclient/2113000/instantclient-basic-windows.x64-21.13.0.0.0dbru.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn_software/nt/instantclient/2113000/instantclient-sdk-windows.x64-21.13.0.0.0dbru.zip"
      }
    }
  },
  {
    "version": "19.22.0.0.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn_software/nt/instantclient/1922000/instantclient-basic-windows.x64-19.22.0.0.0dbru.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn_software/nt/instantclient/1922000/instantclient-sdk-windows.x64-19.22.0.0.0dbru.zip"
      }
    }
  },
  {
    "version": "18.5.0.0.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/185000/instantclient-basic-windows.x64-18.5.0.0.0dbru.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/185000/instantclient-sdk-windows.x64-18.5.0.0.0dbru.zip"
      }
    }
  },
  {
    "version": "12.2.0.1.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/122010/instantclient-basic-windows.x64-12.2.0.1.0.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/122010/instantclient-sdk-windows.x64-12.2.0.1.0.zip"
      }
    }
  },
  {
    "version": "12.1.0.2.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/121020/instantclient-basic-windows.x64-12.1.0.2.0.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/121020/instantclient-sdk-windows.x64-12.1.0.2.0.zip"
      }
    }
  },
  {
    "version": "11.2.0.4.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/11204/instantclient-basic-windows.x64-11.2.0.4.0.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/11204/instantclient-sdk-windows.x64-11.2.0.4.0.zip"
      }
    }
  },
  {
    "version": "11.1.0.7.0",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/111070/instantclient-basic-win-x86-64-11.1.0.7.0.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/111070/instantclient-sdk-win-x86-64-11.1.0.7.0.zip"
      }
    }
  },
  {
    "version": "10.2.0.5",
    "base": {
      "name": "Base",
      "description": "One of these packages is required",
      "basicPackage": {
        "name": "Basic Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/10205/instantclient-basic-win64-10.2.0.5.zip"
      }
    },
    "developmentAndRuntime": {
      "name": "Development and Runtime",
      "description": "Optional packages",
      "sdkPackage": {
        "name": "SDK Package",
        "url": "https://download.oracle.com/otn/nt/instantclient/10205/instantclient-sdk-win64-10.2.0.5.zip"
      }
    }
  },
];

export default oracleVersionInfo;
